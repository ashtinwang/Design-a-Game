var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1
};

var Player_1 = {
  x: 25,
  y: 200,
  jumpCount: 2,
  previousY: 200,
  previousY2: 2001,
  previousY3: 2002,
  percent: 0,
  velocity : 0,
  acceleration : 0.5,
  jump: -10.5,
  up: "w",
  left: "a",
  down: "s",
  right: "d",
  attack: "p",
  special: "d",
  grab: "u",
  taunt: "1",
  shield: "i",
  dash: "j",
  cUp: "k",
  cLeft: "N",
  cDown: ".",
  cRight: "m",
  tapJump : " ",
  autoDash: false,
  direction:"right"
};
