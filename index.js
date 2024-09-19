import { makeCanvasManager } from "./canvas.js";
import { animate, findBallAtPoint } from "./helpers.js";
import {
  checkBallCollision,
  adjustBallPositions,
  resolveBallCollision,
} from "./ball.js";
import { makeRipple } from "./ripple.js";
import { makeAudioManager } from "./audio.js";
import { makeLifeManager } from "./lives.js";
import { makeLevelManager } from "./level.js";
import { makeContinueButtonManager } from "./continueButton.js";
import { centerTextBlock } from "./centerTextBlock.js";
import { drawScore } from "./score.js";
import { levels, makeLevelBalls } from "./levelData.js";
import { drawHoldBlastPreview, makeHoldBlast } from "./holdBlast.js";
import { BLAST_HOLD_THRESHOLD } from "./constants.js";

const URLParams = new URLSearchParams(window.location.search);
const previewData = JSON.parse(decodeURIComponent(URLParams.get("level")));
const previewDataPresent = !!window.location.search && previewData;

if (previewDataPresent) {
  const previewTitle = `Bubbles! - “${previewData.name}”`;
  const previewDesc = "Click to play this custom level preview";
  document.title = previewTitle;
  document
    .querySelector('meta[property="og:title"]')
    .setAttribute("content", previewTitle);
  document
    .querySelector('meta[name="description"]')
    .setAttribute("content", previewDesc);
  document
    .querySelector('meta[property="og:description"]')
    .setAttribute("content", previewDesc);
}

const canvasManager = makeCanvasManager({
  initialWidth: window.innerWidth,
  initialHeight: window.innerHeight,
  attachNode: "#canvas",
});
const audioManager = makeAudioManager();
const lifeManager = makeLifeManager(canvasManager);
const levelManager = makeLevelManager(
  canvasManager,
  previewDataPresent ? onPreviewAdvance : onLevelAdvance,
  previewDataPresent
);
const continueButtonManager = makeContinueButtonManager(canvasManager);
const CTX = canvasManager.getContext();
let currentPointerID;
let currentPointerPosition;
let pointerHoldStart;
let holdBlasts;
let clicksTotal;
let ballsPoppedTotal;
let ballsMissedTotal;
let clicksRound;
let ballsPoppedRound;
let ballsMissedRound;
let balls;
let ripples;

function restartGame() {
  currentPointerID = null;
  currentPointerPosition = null;
  pointerHoldStart = 0;
  holdBlasts = [];
  clicksTotal = 0;
  ballsPoppedTotal = 0;
  ballsMissedTotal = 0;
  clicksRound = 0;
  ballsPoppedRound = 0;
  ballsMissedRound = 0;
  balls = [];
  ripples = [];
  lifeManager.reset();
  levelManager.reset();
  levelManager.showLevelInterstitial();
}
restartGame();

document.addEventListener(
  "pointerdown",
  ({ pointerId, clientX: x, clientY: y }) => {
    if (levelManager.isGameOver() || levelManager.isLastLevel()) {
      continueButtonManager.handleClick({ x, y }, restartGame);
    } else if (levelManager.isInterstitialShowing()) {
      continueButtonManager.handleClick(
        { x, y },
        levelManager.dismissInterstitialAndAdvanceLevel
      );
    } else {
      currentPointerID = pointerId;
      currentPointerPosition = { x, y };
      pointerHoldStart = Date.now();

      handleBallClick({ x, y });
    }
  }
);

document.addEventListener(
  "pointerup",
  ({ pointerId, clientX: x, clientY: y }) => {
    if (pointerId === currentPointerID) {
      if (
        Date.now() - pointerHoldStart > BLAST_HOLD_THRESHOLD &&
        !levelManager.isInterstitialShowing()
      ) {
        holdBlasts.push(
          makeHoldBlast(canvasManager, { x, y }, Date.now() - pointerHoldStart)
        );
      }

      currentPointerID = null;
      pointerHoldStart = 0;
    }
  }
);

document.addEventListener("pointermove", (e) => {
  const { clientX: x, clientY: y } = e;

  currentPointerPosition = { x, y };

  if (levelManager.isInterstitialShowing())
    continueButtonManager.handleHover({ x, y });

  e.preventDefault();
});

document.addEventListener("keydown", ({ key }) => {
  const validKey = key === " " || key === "Enter";

  if (validKey && levelManager.isGameOver()) {
    restartGame();
  } else if (validKey && levelManager.isInterstitialShowing()) {
    levelManager.dismissInterstitialAndAdvanceLevel();
  }
});

animate((deltaTime) => {
  CTX.clearRect(0, 0, canvasManager.getWidth(), canvasManager.getHeight());

  // Calculate new positions for all balls
  balls.forEach((b) => b.update(deltaTime));

  // Run collision detection on balls + holdBlasts
  const ballsInPlay = balls.filter((b) => b.isRemaining() && b.shouldRender());
  const currentBlasts = holdBlasts.filter((b) => !b.isGone());
  ballsInPlay.forEach((ballA) => {
    ballsInPlay.forEach((ballB) => {
      if (ballA !== ballB) {
        const collision = checkBallCollision(ballA, ballB);
        if (collision[0]) {
          adjustBallPositions(ballA, ballB, collision[1]);
          resolveBallCollision(ballA, ballB);
        }
      }
    });

    currentBlasts.forEach((blast) => {
      const collision = checkBallCollision(ballA, blast);
      if (collision[0]) ballA.pop();
    });
  });

  // Draw level + life text underneath balls
  levelManager.drawLevelNumber();

  if (!levelManager.isGameOver()) lifeManager.draw();

  // Draw ripples, balls, and hold blasts
  ripples.forEach((r) => r.draw());
  holdBlasts.forEach((b) => b.draw());
  balls.forEach((b) => b.draw(deltaTime));

  // Draw pointer hold circle
  if (
    currentPointerID &&
    Date.now() - pointerHoldStart > BLAST_HOLD_THRESHOLD
  ) {
    drawHoldBlastPreview(
      canvasManager,
      currentPointerPosition,
      pointerHoldStart
    );
  }

  levelManager.drawInterstitialMessage({
    previewInitialMessage: (msElapsed) => {
      centerTextBlock(canvasManager, [`Preview of “${previewData.name}”`]);
      continueButtonManager.draw(msElapsed, 0, "Play Preview");
    },
    initialMessage: (msElapsed) => {
      centerTextBlock(canvasManager, [`Pop the bubble`]);
      continueButtonManager.draw(msElapsed, 0, "Play");
    },
    firstMissMessage: (msElapsed) => {
      centerTextBlock(canvasManager, [`Miss a bubble, lose a life`]);
      continueButtonManager.draw(msElapsed, 1000);
    },
    defaultMessage: (msElapsed) => {
      drawScore(
        canvasManager,
        clicksRound,
        ballsPoppedRound,
        ballsMissedRound,
        msElapsed
      );
      continueButtonManager.draw(msElapsed, 2000);
    },
    endGameMessage: (msElapsed) => {
      drawScore(
        canvasManager,
        clicksTotal,
        ballsPoppedTotal,
        ballsMissedTotal,
        msElapsed,
        "Game over"
      );
      continueButtonManager.draw(msElapsed, 2000, "Try Again");
    },
    reachedEndOfGameMessage: (msElapsed) => {
      drawScore(
        canvasManager,
        clicksTotal,
        ballsPoppedTotal,
        ballsMissedTotal,
        msElapsed,
        "You beat all levels!"
      );
      continueButtonManager.draw(msElapsed, 2000, "Play Again");
    },
  });
});

function handleBallClick({ x, y }) {
  const collidingBall = findBallAtPoint(balls, { x, y });
  clicksTotal++;
  clicksRound++;

  if (collidingBall) {
    collidingBall.pop();
    audioManager.playRandomPluck();
  } else {
    ripples.push(makeRipple(canvasManager, { x, y }));
    audioManager.playRandomFireworks();
  }
}

function onPop() {
  ballsPoppedTotal++;
  ballsPoppedRound++;

  if (getBallsRemaining() <= 0) {
    levelManager.showLevelInterstitial();
  }
}

function onMiss() {
  if (!levelManager.isGameOver()) {
    ballsMissedTotal++;
    ballsMissedRound++;
    lifeManager.subtract();
    audioManager.playMiss();
    levelManager.setFirstMiss();

    if (lifeManager.getLives() <= 0) {
      onGameEnd();
    } else if (getBallsRemaining() <= 0) {
      levelManager.showLevelInterstitial();
    }
  }
}

function onGameEnd() {
  audioManager.playLose();
  levelManager.onGameOver();
}

function onLevelAdvance() {
  clicksRound = 0;
  ballsPoppedRound = 0;
  ballsMissedRound = 0;
  ripples = [];

  const levelData = levels[levelManager.getLevel() - 1];
  // Allow popping animation to finish playing for previous level balls
  balls = balls
    .filter((b) => b.isPopped() && b.shouldRender())
    .concat(makeLevelBalls(canvasManager, levelData, onPop, onMiss));

  // Call on first interaction. Subsequent calls are ignored.
  audioManager.initialize();
  audioManager.playLevel();
}

function onPreviewAdvance() {
  clicksRound = 0;
  ballsPoppedRound = 0;
  ballsMissedRound = 0;
  ripples = [];

  // Allow popping animation to finish playing for previous level balls
  balls = balls
    .filter((b) => b.isPopped() && b.shouldRender())
    .concat(makeLevelBalls(canvasManager, previewData, onPop, onMiss));

  // Call on first interaction. Subsequent calls are ignored.
  audioManager.initialize();
  audioManager.playLevel();
}

function getBallsRemaining() {
  return balls.filter((b) => b.isRemaining());
}
