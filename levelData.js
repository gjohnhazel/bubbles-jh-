import { makeBall } from "./ball.js";

export const levels = [
  {
    name: "LEVEL 1",
    gravity: 0.05,
    balls: [[0, 0, { velocity: { x: 2, y: 1 }, color: "#FCF6E8" }, 0, 0, 0]],
  },
  {
    name: "LEVEL 2",
    gravity: 0.05,
    balls: [
      [
        0,
        { velocity: { x: -4.5, y: 1 }, color: "#79CAEC" },
        0,
        0,
        { velocity: { x: 4.5, y: 1 }, color: "#DF432A" },
        0,
      ],
    ],
  },
];

export const makeLevelBalls = (canvasManager, level, onPop, onMiss) => {
  const balls = [];
  level.balls.forEach((row, rowIndex) => {
    // Example rows for an array with a length of 3
    // INDEX   INVERSE   CALCULATION                      YPOS RESULT
    // 0       3         -margin-ballheight*3-spacing*3   -16-132-132 = -280
    // 1       2         -margin-ballheight*2-spacing*2   -16-88-88   = -192
    // 2       1         -margin-ballheight*1-spacing*1   -16-44-44   = -104
    const spaceBetweenRows = 44;
    const ballSize = 44;
    const verticalOffset = 16;
    const inverseIndex = level.balls.length - rowIndex;
    const yPos =
      -verticalOffset -
      ballSize * inverseIndex -
      spaceBetweenRows * inverseIndex;

    row.forEach((cell, cellIndex) => {
      if (!!cell) {
        // TODO how to adjust number of cells given very wide displays where 6 across
        // is not dense enough to have fun
        const cellWidth = canvasManager.getWidth() / row.length;
        const cellXPos = cellWidth * cellIndex;
        const xPos = cellXPos + (cellWidth - ballSize) / 2;
        balls.push(
          makeBall(
            canvasManager,
            {
              startPosition: { x: xPos, y: yPos },
              startVelocity: { x: cell.velocity.x, y: cell.velocity.y },
              radius: ballSize,
              fill: cell.color,
            },
            onPop,
            onMiss
          )
        );
      }
    });
  });
  return balls;
};
