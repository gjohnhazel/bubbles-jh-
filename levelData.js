import { makeBall } from "./ball.js";
import { BUBBLE_RADIUS } from "./constants.js";

export const levels = [
{
    "name": "LEVEL 1",
    "par": 8,
    "gravity": 0.05,
    "balls": [
        [
            { "v": { "x": 0, "y": 0 }, "c": "#DF432A" },
            { "v": { "x": 0, "y": 0 }, "c": "#79CAEC" },
            { "v": { "x": 0, "y": 0 }, "c": "#F4BF2A" },
            0,
            0,
            0
        ],
        [
            { "v": { "x": 0, "y": 0 }, "c": "#FCF6E8" },
            { "v": { "x": 0, "y": 0 }, "c": "#EA98AA" },
            { "v": { "x": 0, "y": 0 }, "c": "#DF432A" },
            0,
            0,
            0
        ],
        [
            0,
            { "v": { "x": 0, "y": 0 }, "c": "#79CAEC" },
            { "v": { "x": 0, "y": 0 }, "c": "#FCF6E8" },
            { "v": { "x": 0, "y": 0 }, "c": "#F4BF2A" },
            0,
            0
        ],
         [
            0,
            0,
            0,
            { "v": { "x": 0, "y": 0 }, "c": "#EA98AA" },
            { "v": { "x": 0, "y": 0 }, "c": "#DF432A" },
            0
        ],
        [
            0,
            0,
            0,
            { "v": { "x": 0, "y": 0 }, "c": "#79CAEC" },
            { "v": { "x": 0, "y": 0 }, "c": "#FCF6E8" },
            { "v": { "x": 0, "y": 0 }, "c": "#F4BF2A" }
        ],
        [
            0,
            0,
            0,
            { "v": { "x": 0, "y": 0 }, "c": "#DF432A" },
            { "v": { "x": 0, "y": 0 }, "c": "#EA98AA" },
            { "v": { "x": 0, "y": 0 }, "c": "#79CAEC" }
        ],
        [
            0,
            0,
            0,
            { "v": { "x": 0, "y": 0 }, "c": "#FCF6E8" },
            { "v": { "x": 0, "y": 0 }, "c": "#F4BF2A" },
            { "v": { "x": 0, "y": 0 }, "c": "#DF432A" }
        ],
        [
            0,
            0,
            0,
            0,
            { "v": { "x": 0, "y": 0 }, "c": "#EA98AA" },
            { "v": { "x": 0, "y": 0 }, "c": "#FCF6E8" }
        ]
    ]
},

  {
    name: "LEVEL 2",
    par: 2,
    gravity: 0.05,
    balls: [
      [0, 0, 0, 0, { v: { x: -2, y: 2 }, c: "#DF432A" }, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 2, y: 1 }, c: "#FCF6E8" }, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 3",
    par: 3,
    gravity: 0.05,
    balls: [
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        { v: { x: -7, y: 1 }, c: "#79CAEC" },
        0,
        0,
        { v: { x: 7, y: 1 }, c: "#DF432A" },
        0,
      ],
    ],
  },
  {
    name: "LEVEL 4",
    par: 3,
    gravity: 0.06,
    balls: [
      [0, 0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 5",
    par: 3,
    gravity: 0.06,
    balls: [
      [{ v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0],
      [0, 0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }],
    ],
  },
  {
    name: "LEVEL 6",
    par: 3,
    gravity: 0.06,
    balls: [
      [{ v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0],
      [0, 0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 7",
    par: 3,
    gravity: 0.06,
    balls: [
      [{ v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }],
      [{ v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 8",
    par: 4,
    gravity: 0.06,
    balls: [
      [0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        { v: { x: 2, y: 7 }, c: "#DF432A" },
        0,
        0,
        { v: { x: -2, y: 7 }, c: "#79CAEC" },
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 40, y: 1 }, c: "#DF432A" }, 0, 0, 0],
      [0, 0, 0, { v: { x: -15, y: 1 }, c: "#FCF6E8" }, 0, 0],
      [{ v: { x: 15, y: 0 }, c: "#F4BF2A" }, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 9",
    par: 4,
    gravity: 0.06,
    balls: [
      [{ v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [{ v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 10",
    par: 5,
    gravity: 0.06,
    balls: [
      [
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        { v: { x: 0, y: 2 }, c: "#DF432A" },
        0,
        0,
        { v: { x: 0, y: 2 }, c: "#F4BF2A" },
        0,
      ],
      [
        0,
        { v: { x: 0, y: -2 }, c: "#FCF6E8" },
        0,
        0,
        { v: { x: 0, y: -2 }, c: "#F4BF2A" },
        0,
      ],
      [
        { v: { x: -5, y: 0 }, c: "#FCF6E8" },
        0,
        0,
        0,
        0,
        { v: { x: 5, y: 0 }, c: "#F4BF2A" },
      ],
      [
        0,
        0,
        { v: { x: 2, y: 0 }, c: "#F4BF2A" },
        { v: { x: -2, y: 0 }, c: "#DF432A" },
        0,
        0,
      ],
    ],
  },
  {
    name: "LEVEL 11",
    par: 5,
    gravity: 0.06,
    balls: [
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        0,
        0,
      ],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
      ],
      [
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
      ],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
      ],
    ],
  },
  {
    name: "LEVEL 12",
    par: 6,
    gravity: 0.07,
    balls: [
      [
        0,
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        0,
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
      ],
      [
        0,
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#DF432A" },
      ],
      [
        0,
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        0,
      ],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 13",
    par: 7,
    gravity: 0.07,
    balls: [
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0],
      [0, 0, { v: { x: 11, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [0, 0, 0, 0, { v: { x: 5, y: 8 }, c: "#79CAEC" }, 0],
      [0, 0, 0, { v: { x: -8, y: -10 }, c: "#EA98AA" }, 0, 0],
      [0, { v: { x: 0, y: -7 }, c: "#DF432A" }, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: -7 }, c: "#DF432A" }, 0, 0, 0],
      [0, 0, 0, 0, { v: { x: 2, y: -4 }, c: "#EA98AA" }, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [
        0,
        { v: { x: 9, y: -6 }, c: "#79CAEC" },
        0,
        { v: { x: 6, y: 2 }, c: "#F4BF2A" },
        0,
        0,
      ],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0],
      [0, 0, 0, { v: { x: -3, y: 9 }, c: "#FCF6E8" }, 0, 0],
      [0, { v: { x: 9, y: 3 }, c: "#79CAEC" }, 0, 0, 0, 0],
      [0, 0, 0, 0, { v: { x: -9, y: 3 }, c: "#EA98AA" }, 0],
      [0, 0, 0, 0, { v: { x: -4, y: -5 }, c: "#FCF6E8" }, 0],
      [0, 0, 0, { v: { x: 3, y: -7 }, c: "#F4BF2A" }, 0, 0],
    ],
  },
  {
    name: "LEVEL 14",
    par: 7,
    gravity: 0.06,
    balls: [
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
        0,
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
      ],
      [0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0],
      [0, 0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0],
      [0, { v: { x: 0, y: 0 }, c: "#F4BF2A" }, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#FCF6E8" }, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0],
      [0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0, 0, 0],
    ],
  },
  {
    name: "LEVEL 15",
    par: 9,
    gravity: 0.07,
    balls: [
      [
        0,
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        0,
      ],
      [
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 11, y: 0 }, c: "#FCF6E8" }, 0, 0, 0],
      [
        0,
        { v: { x: -5, y: 7 }, c: "#DF432A" },
        { v: { x: 62, y: 0 }, c: "#79CAEC" },
        0,
        { v: { x: 5, y: 8 }, c: "#79CAEC" },
        0,
      ],
      [0, 0, 0, { v: { x: -8, y: -10 }, c: "#EA98AA" }, 0, 0],
      [
        0,
        { v: { x: 0, y: -7 }, c: "#DF432A" },
        0,
        { v: { x: -10, y: 0 }, c: "#F4BF2A" },
        0,
        { v: { x: -12, y: -4 }, c: "#EA98AA" },
      ],
      [0, 0, { v: { x: 0, y: -7 }, c: "#DF432A" }, 0, 0, 0],
      [
        0,
        0,
        { v: { x: 8, y: 2 }, c: "#FCF6E8" },
        0,
        { v: { x: 2, y: -4 }, c: "#EA98AA" },
        0,
      ],
      [
        0,
        { v: { x: 70, y: 3 }, c: "#F4BF2A" },
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        0,
      ],
      [
        0,
        { v: { x: 9, y: -6 }, c: "#79CAEC" },
        0,
        { v: { x: 6, y: 2 }, c: "#F4BF2A" },
        0,
        0,
      ],
      [
        0,
        0,
        { v: { x: 0, y: 13 }, c: "#EA98AA" },
        0,
        { v: { x: -27, y: 0 }, c: "#79CAEC" },
        0,
      ],
      [
        0,
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        0,
        { v: { x: -3, y: -3 }, c: "#79CAEC" },
        0,
        0,
      ],
      [0, 0, { v: { x: 9, y: -4 }, c: "#EA98AA" }, 0, 0, 0],
      [
        { v: { x: 9, y: 7 }, c: "#79CAEC" },
        0,
        0,
        { v: { x: -3, y: 9 }, c: "#FCF6E8" },
        0,
        { v: { x: 5, y: -4 }, c: "#DF432A" },
      ],
      [
        0,
        { v: { x: 9, y: 3 }, c: "#79CAEC" },
        0,
        0,
        { v: { x: -9, y: 4 }, c: "#F4BF2A" },
        0,
      ],
      [0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0, 0],
      [
        0,
        0,
        { v: { x: 6, y: 5 }, c: "#79CAEC" },
        0,
        { v: { x: -9, y: 3 }, c: "#EA98AA" },
        0,
      ],
      [
        0,
        0,
        { v: { x: -3, y: -9 }, c: "#79CAEC" },
        0,
        { v: { x: -4, y: -5 }, c: "#FCF6E8" },
        0,
      ],
      [
        { v: { x: 7, y: 2 }, c: "#F4BF2A" },
        0,
        0,
        { v: { x: 3, y: -7 }, c: "#F4BF2A" },
        0,
        0,
      ],
    ],
  },
  {
    name: "LEVEL 16",
    par: 12,
    gravity: 0.06,
    balls: [
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 1 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: -1 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: -1, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 1, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
      ],
      [
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 1, y: 0 }, c: "#F4BF2A" },
        { v: { x: -1, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
      ],
      [
        0,
        0,
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        0,
        0,
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [
        { v: { x: 0, y: 0 }, c: "#F4BF2A" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#DF432A" },
        { v: { x: 0, y: 0 }, c: "#EA98AA" },
        { v: { x: 0, y: 0 }, c: "#FCF6E8" },
        { v: { x: 0, y: 0 }, c: "#79CAEC" },
      ],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#DF432A" }, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, { v: { x: 0, y: 0 }, c: "#79CAEC" }, 0, 0, 0],
      [0, 0, 0, 0, 0, 0],
      [0, 0, 0, { v: { x: 0, y: 0 }, c: "#EA98AA" }, 0, 0],
    ],
  },
];

export const makeLevelBall = ({ x, y }, color) => ({
  v: { x, y },
  c: color,
});

export const makeLevelEmptyCell = () => 0;

export const makeLevelEmptyRow = () => [
  makeLevelEmptyCell(),
  makeLevelEmptyCell(),
  makeLevelEmptyCell(),
  makeLevelEmptyCell(),
  makeLevelEmptyCell(),
  makeLevelEmptyCell(),
];

export const countLevelBalls = ({ balls }) =>
  balls.reduce((acc, row) => acc + row.reduce((acc, b) => acc + !!b, 0), 0);

export const getLevelDataByNumber = (level) => levels[level - 1];

export const makeLevelBalls = (canvasManager, level, onPop, onMiss) => {
  const balls = [];
  level.balls.forEach((row, rowIndex) => {
    // Example rows for an array with a length of 3
    // INDEX   INVERSE   CALCULATION                      YPOS RESULT
    // 0       3         -margin-ballheight*3-spacing*3   -16-132-132 = -280
    // 1       2         -margin-ballheight*2-spacing*2   -16-88-88   = -192
    // 2       1         -margin-ballheight*1-spacing*1   -16-44-44   = -104
    const spaceBetweenRows = 120;
    const ballSize = BUBBLE_RADIUS;
    const verticalOffset = 16;
    const inverseIndex = level.balls.length - rowIndex;
    const yPos =
      -verticalOffset -
      ballSize * inverseIndex -
      spaceBetweenRows * inverseIndex;

    row.forEach((cell, cellIndex) => {
      if (!!cell) {
        const {
          v: { x, y },
          c: fill,
        } = cell;
        const cellWidth = canvasManager.getWidth() / row.length;
        const cellXPos = cellWidth * cellIndex;
        const xPos = cellXPos + cellWidth / 2;
        balls.push(
          makeBall(
            canvasManager,
            {
              startPosition: { x: xPos, y: yPos },
              startVelocity: { x, y },
              radius: ballSize,
              fill,
              gravity: level.gravity,
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
