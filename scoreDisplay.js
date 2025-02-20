import {
  FONT,
  FONT_WEIGHT_NORMAL,
  FONT_WEIGHT_BOLD,
  BLAST_MAX_SIZE,
} from "./constants.js";
import { getGradientBitmap, red } from "./colors.js";
import { clampedProgress, transition, randomBetween } from "./helpers.js";
import {
  easeOutCirc,
  easeInOutSine,
  easeOutQuad,
  easeOutCubic,
  easeOutBack,
  easeOutQuart,
} from "./easings.js";
import { makeGrid } from "./grid.js";

const edgeMargin = 32;
const verticalMargin = 32;
const verticalMarginBetweenSections = 56;
const iconSize = 24;
const iconRadius = iconSize / 2;
const numPoppedTextWidth = 40;

export const makeScoreDisplay = (canvasManager, scoreStore, levelManager) => {
  const CTX = canvasManager.getContext();
  let scoreDisplayStart = Date.now();
  let mostRecentLevelDrawn = null;
  let stats = null;

  const updateStats = () => {
    const currentLevel = levelManager.getLevel();

    if (mostRecentLevelDrawn !== currentLevel) {
      stats = {
        taps: scoreStore.getTaps(currentLevel),
        tapsPopped: scoreStore.sumCategoryLevelEvents("taps", currentLevel)
          .numPopped,
        slingshots: scoreStore.getSlingshots(currentLevel),
        blasts: scoreStore.getBlasts(currentLevel),
        totalPopped: scoreStore.sumPopped(currentLevel),
        totalMissed: scoreStore.sumCategoryLevelEvents(
          "missedBubbles",
          currentLevel
        ).num,
      };

      mostRecentLevelDrawn = currentLevel;
      scoreDisplayStart = Date.now();
    }
  };

  const drawTitleLine = (leftText, rightText) => {
    CTX.save();
    applyTextStyle1(CTX);
    const leftTextWidth = CTX.measureText(leftText).width;
    const leftTextHeight = 10;

    CTX.fillText(leftText, edgeMargin, leftTextHeight);
    CTX.restore();

    CTX.save();
    applyTextStyle2(CTX);
    const rightTextWidth = CTX.measureText(rightText).width;
    CTX.fillText(
      rightText,
      canvasManager.getWidth() - edgeMargin,
      leftTextHeight
    );
    CTX.restore();

    const lineMargin = 8;
    CTX.fillStyle = "rgba(255, 255, 255, .2)";
    CTX.fillRect(
      leftTextWidth + edgeMargin + lineMargin,
      leftTextHeight / 2,
      canvasManager.getWidth() -
        leftTextWidth -
        rightTextWidth -
        edgeMargin * 2 -
        lineMargin * 2,
      1
    );
  };

  const drawTapItem = ({ popped, fill }, index) => {
    const animationDelay = Math.min(index * 68, 816);

    if (popped) {
      const slideUp = transition(
        2,
        0,
        clampedProgress(
          animationDelay,
          200 + animationDelay,
          Date.now() - scoreDisplayStart
        ),
        easeOutCubic
      );
      const scaleUp = transition(
        0.98,
        1,
        clampedProgress(
          animationDelay,
          180 + animationDelay,
          Date.now() - scoreDisplayStart
        ),
        easeOutCubic
      );

      const preRenderImage = getGradientBitmap(fill);
      CTX.translate(iconRadius, slideUp);
      CTX.scale(scaleUp, scaleUp);
      CTX.drawImage(
        preRenderImage,
        -iconRadius,
        0,
        iconSize * canvasManager.getScaleFactor(),
        iconSize * canvasManager.getScaleFactor()
      );
    } else {
      const rippleProgress = clampedProgress(
        animationDelay,
        2000 + animationDelay,
        Date.now() - scoreDisplayStart
      );
      const outerCircleRadius = transition(
        iconRadius,
        iconRadius * 1.4,
        rippleProgress,
        easeOutQuad
      );
      const outerCircleFade = transition(1, 0, rippleProgress, easeOutQuad);
      const outerCircleLineWidth = transition(
        2,
        3,
        rippleProgress,
        easeOutQuad
      );
      const innerCircleRadius = transition(
        iconRadius / 2,
        iconRadius,
        rippleProgress,
        easeOutQuad
      );
      const innerCircleFade = transition(0.6, 1, rippleProgress, easeOutQuad);
      const innerCircleLineWidth = transition(
        1,
        2,
        rippleProgress,
        easeOutQuad
      );
      const hiddenCircleRadius = transition(
        0,
        iconRadius / 2,
        rippleProgress,
        easeOutQuad
      );

      CTX.strokeStyle = red;
      CTX.lineWidth = outerCircleLineWidth;
      CTX.globalAlpha = outerCircleFade;
      CTX.beginPath();
      CTX.arc(iconRadius, iconRadius, outerCircleRadius, 0, 2 * Math.PI);
      CTX.closePath();
      CTX.stroke();

      CTX.lineWidth = innerCircleLineWidth;
      CTX.globalAlpha = innerCircleFade;
      CTX.beginPath();
      CTX.arc(iconRadius, iconRadius, innerCircleRadius, 0, 2 * Math.PI);
      CTX.closePath();
      CTX.stroke();

      CTX.lineWidth = 1;
      CTX.globalAlpha = 0.6;
      CTX.beginPath();
      CTX.arc(iconRadius, iconRadius, hiddenCircleRadius, 0, 2 * Math.PI);
      CTX.closePath();
      CTX.stroke();
    }
  };

  const drawSlingshotItem = ({ popped, velocity }, index) => {
    const animationDelay = Math.min(index * 64, 768);
    const textHeight = 17.2;
    const angleInRads = Math.atan2(velocity.y, velocity.x);
    const scaleIn = transition(
      0,
      1,
      clampedProgress(
        animationDelay,
        600 + animationDelay,
        Date.now() - scoreDisplayStart
      ),
      easeOutQuart
    );
    const rotateIn = transition(
      0,
      angleInRads,
      clampedProgress(
        animationDelay,
        600 + animationDelay,
        Date.now() - scoreDisplayStart
      ),
      easeOutBack
    );

    CTX.save();
    if (popped) {
      CTX.strokeStyle = red;
      CTX.fillStyle = red;
    } else {
      CTX.strokeStyle = `rgba(255, 255, 255, .3)`;
      CTX.fillStyle = `rgba(255, 255, 255, .3)`;
    }

    const arrowLength = 10;
    const arrowWidth = 6;
    const lineWidth = 5;

    CTX.translate(iconRadius, iconRadius);
    CTX.scale(scaleIn, scaleIn);
    CTX.rotate(rotateIn);
    CTX.beginPath();
    CTX.moveTo(-iconRadius, -lineWidth / 2);
    CTX.lineTo(iconRadius - arrowLength, -lineWidth / 2);
    CTX.lineTo(iconRadius - arrowLength, -lineWidth / 2 - arrowWidth);
    CTX.lineTo(iconRadius, 0);
    CTX.lineTo(iconRadius - arrowLength, lineWidth / 2 + arrowWidth);
    CTX.lineTo(iconRadius - arrowLength, lineWidth / 2);
    CTX.lineTo(-iconRadius, lineWidth / 2);
    CTX.closePath();
    CTX.fill();
    CTX.restore();

    applyTextStyle3(CTX);
    CTX.fillText(`x${popped}`, 30, iconRadius + textHeight / 2);
  };

  const drawBlastItem = ({ popped, power }, index) => {
    const animationDelay = index * 88;
    const textHeight = 17.2;
    const blastIconNumVertices = 12;
    const blastIconRadius = transition(
      iconRadius / 3,
      iconRadius * 1.2,
      clampedProgress(0, BLAST_MAX_SIZE, power)
    );
    const blastIconJitter = transition(
      1,
      2.25,
      clampedProgress(0, BLAST_MAX_SIZE, power)
    );
    const scaleIn = transition(
      0,
      1,
      clampedProgress(
        animationDelay,
        300 + animationDelay,
        Date.now() - scoreDisplayStart
      ),
      easeOutQuad
    );

    const blastIconVertices = new Array(blastIconNumVertices)
      .fill()
      .map((_, index) => {
        const angle = (index / blastIconNumVertices) * Math.PI * 2;
        const distance = randomBetween(
          blastIconRadius - blastIconJitter,
          blastIconRadius + blastIconJitter
        );
        return {
          x: Math.cos(angle) * distance,
          y: Math.sin(angle) * distance,
        };
      });

    CTX.save();
    if (popped > 0) {
      CTX.fillStyle = red;
      CTX.strokeStyle = red;
    } else {
      CTX.fillStyle = `rgba(255, 255, 255, .3)`;
      CTX.strokeStyle = `rgba(255, 255, 255, .5)`;
    }
    CTX.globalAlpha = 0.2;
    CTX.translate(iconRadius, iconRadius);
    CTX.scale(scaleIn, scaleIn);
    CTX.beginPath();
    blastIconVertices.forEach(({ x, y }, index) => {
      index === 0 ? CTX.moveTo(x, y) : CTX.lineTo(x, y);
    });
    CTX.closePath();
    CTX.fill();
    CTX.globalAlpha = 1;
    CTX.stroke();
    CTX.restore();

    applyTextStyle3(CTX);
    CTX.fillText(`x${popped}`, 32, iconRadius + textHeight / 2);
  };

  const draw = (specialState = false) => {
    updateStats();

    CTX.save();
    CTX.fillStyle = "white";
    CTX.font = `${FONT_WEIGHT_BOLD} 14px ${FONT}`;
    CTX.fillText(scoreStore.levelScoreNumber(levelManager.getLevel()), 24, 24);
    CTX.restore();

    if (specialState) {
      CTX.save();

      // Darken screen so it looks different from normal interstitial
      CTX.fillStyle = `rgba(0, 0, 0, 0.4)`;
      CTX.fillRect(0, 0, canvasManager.getWidth(), canvasManager.getHeight());

      // Display special message
      CTX.translate(canvasManager.getWidth() / 2, 56);
      CTX.fillStyle = `rgba(255, 255, 255, 1)`;
      CTX.font = `${FONT_WEIGHT_BOLD} 24px ${FONT}`;
      CTX.textAlign = "center";
      if (specialState === "gameWon") CTX.fillText("You won!", 0, 0);
      if (specialState === "gameLost") CTX.fillText("You lost!", 0, 0);
      if (specialState === "firstMiss")
        CTX.fillText("Miss a bubble, lose a life", 0, 0);

      CTX.restore();
    }

    CTX.save();

    const opacityTransition = transition(
      0,
      1,
      clampedProgress(0, 120, Date.now() - scoreDisplayStart),
      easeInOutSine
    );
    const slideUpTransition = transition(
      128,
      88,
      clampedProgress(0, 240, Date.now() - scoreDisplayStart),
      easeOutCirc
    );

    CTX.globalAlpha = opacityTransition;
    CTX.translate(0, slideUpTransition);

    if (stats.taps.length) {
      drawTitleLine(
        "TAPS",
        `${stats.tapsPopped} ${stats.tapsPopped === 1 ? "Hit" : "Hits"}, ${
          stats.taps.length - stats.tapsPopped
        } ${stats.taps.length - stats.tapsPopped === 1 ? "Miss" : "Misses"}`
      );

      CTX.translate(0, verticalMargin);

      const tapsGrid = makeGrid(canvasManager, stats.taps, {
        itemWidth: iconSize,
        itemHeight: iconSize,
      });

      tapsGrid.drawItems(drawTapItem);

      CTX.translate(0, tapsGrid.getHeight() + verticalMarginBetweenSections);
    }

    if (stats.slingshots.length) {
      drawTitleLine("SLINGSHOTS", `${stats.slingshots.length} Launched`);

      CTX.translate(0, verticalMargin);

      const slingshotsGrid = makeGrid(canvasManager, stats.slingshots, {
        itemWidth: iconSize + 8 + numPoppedTextWidth,
        itemHeight: iconSize,
      });

      slingshotsGrid.drawItems(drawSlingshotItem);

      CTX.translate(
        0,
        slingshotsGrid.getHeight() + verticalMarginBetweenSections
      );
    }

    if (stats.blasts.length) {
      drawTitleLine("BLASTS", `${stats.blasts.length} Detonated`);

      CTX.translate(0, edgeMargin);

      const blastsGrid = makeGrid(canvasManager, stats.blasts, {
        itemWidth: iconSize + 8 + numPoppedTextWidth,
        itemHeight: iconSize,
      });

      blastsGrid.drawItems(drawBlastItem);
    }

    CTX.restore();
  };

  return { draw };
};

function applyTextStyle1(CTX) {
  CTX.fillStyle = "white";
  CTX.font = `${FONT_WEIGHT_BOLD} 14px ${FONT}`;
  CTX.textAlign = "left";
  CTX.letterSpacing = "1px";
}

function applyTextStyle2(CTX) {
  CTX.fillStyle = "white";
  CTX.font = `${FONT_WEIGHT_NORMAL} 14px ${FONT}`;
  CTX.textAlign = "right";
  CTX.letterSpacing = "0px";
}

function applyTextStyle3(CTX) {
  CTX.fillStyle = "white";
  CTX.font = `${FONT_WEIGHT_BOLD} 24px ${FONT}`;
  CTX.textAlign = "left";
  CTX.letterSpacing = "0px";
}
