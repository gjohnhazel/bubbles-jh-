import { yellow } from "./colors.js";
import { FONT, FONT_WEIGHT_BOLD } from "./constants.js";
import { levels as levelData, getLevelDataByNumber } from "./levelData.js";
import { drawTextRotate } from "./textRotate.js";
import { makeTextBlock } from "./textBlock.js";

export const makeLevelManager = (
  canvasManager,
  onInterstitial,
  onAdvance,
  isPreview
) => {
  const CTX = canvasManager.getContext();
  let level;
  let previousLevelValue;
  let levelChangeStart;
  let hasCompletedInitialAdvance;
  let interstitialShowing;
  let interstitialStart;
  let firstMissLevel;
  let hasShownFirstMissMessage;
  let gameOver;
  let hasShownPreviewInitialMessage;
  let levelStarted;

  const reset = () => {
    level = 1;
    previousLevelValue = false;
    hasCompletedInitialAdvance = false;
    interstitialShowing = false;
    firstMissLevel = false;
    hasShownFirstMissMessage = false;
    gameOver = false;
    hasShownPreviewInitialMessage = false;
  };
  reset();

  const isLastLevel = () => level >= levelData.length;

  const showLevelInterstitial = () => {
    interstitialShowing = true;
    interstitialStart = Date.now();
    onInterstitial(interstitialStart);
  };

  const dismissInterstitialAndAdvanceLevel = () => {
    // On the initial interstitial we want to show the "next" level, aka
    // "Level 1". However on subsequent  interstitials we want to show the
    // completed level aka the previous level, and only transition the level
    // indicator once the player has advanced by hitting "Continue"
    if (hasCompletedInitialAdvance) {
      previousLevelValue = level;
      level++;
      levelChangeStart = Date.now();
    } else {
      hasCompletedInitialAdvance = true;
    }

    if (isPreview) {
      hasShownPreviewInitialMessage = true;
    }

    if (firstMissLevel && !hasShownFirstMissMessage) {
      hasShownFirstMissMessage = true;
    }

    interstitialShowing = false;
    interstitialStart = false;
    levelStarted = Date.now();
    onAdvance();
  };

  const onGameOver = () => {
    interstitialShowing = true;
    interstitialStart = Date.now();
    gameOver = true;
  };

  const setFirstMiss = () => {
    firstMissLevel = true;
  };

  const drawInterstitialMessage = ({
    previewInitialMessage,
    reachedEndOfGameMessage,
    endGameMessage,
    initialMessage,
    firstMissMessage,
    defaultMessage,
  }) => {
    if (interstitialShowing) {
      const msElapsed = Date.now() - interstitialStart;

      if (isPreview && !hasShownPreviewInitialMessage) {
        previewInitialMessage(msElapsed);
      } else if (gameOver) {
        endGameMessage(msElapsed);
      } else if (isLastLevel()) {
        reachedEndOfGameMessage(msElapsed);
      } else if (level === 1 && !hasCompletedInitialAdvance && !isPreview) {
        initialMessage(msElapsed);
      } else if (firstMissLevel && !hasShownFirstMissMessage && !isPreview) {
        firstMissMessage(msElapsed);
      } else {
        defaultMessage(msElapsed);
      }
    }
  };

  const drawLevelNumber = () => {
    CTX.save();
    CTX.font = `${FONT_WEIGHT_BOLD} 14px ${FONT}`;
    CTX.fillStyle = yellow;
    CTX.letterSpacing = "1px";
    CTX.textAlign = "center";
    CTX.translate(canvasManager.getWidth() / 2, 24);

    if (!isPreview && previousLevelValue) {
      drawTextRotate(
        canvasManager,
        levelChangeStart,
        `LEVEL ${previousLevelValue}`,
        `LEVEL ${level}`
      );
    } else {
      CTX.fillText(isPreview ? "PREVIEW" : `LEVEL ${level}`, 0, 0);
    }

    CTX.restore();
  };

  const showLevelCountdown = () => Date.now() - levelStarted < 3000;

  const drawLevelCountdown = () => {
    makeTextBlock(
      canvasManager,
      {
        xPos: canvasManager.getWidth() / 2,
        yPos: canvasManager.getHeight() / 2,
        textAlign: "center",
        verticalAlign: "center",
        fontSize: 32,
        lineHeight: 48,
      },
      [
        `Par of ${getLevelDataByNumber(level).par}`,
        `${Math.ceil(3 - (Date.now() - levelStarted) / 1000)}`,
      ]
    ).draw();
  };

  return {
    reset,
    getLevel: () => level,
    getLevelData: () => getLevelDataByNumber(level),
    drawInterstitialMessage,
    isInterstitialShowing: () => interstitialShowing,
    drawLevelNumber,
    showLevelCountdown,
    drawLevelCountdown,
    showLevelInterstitial,
    dismissInterstitialAndAdvanceLevel,
    setFirstMiss,
    isLastLevel,
    onGameOver,
    isGameOver: () => gameOver,
  };
};
