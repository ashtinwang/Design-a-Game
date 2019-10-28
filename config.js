var GAME = {
  canvas : {
    width : 600,
    height : 300
  },
  started : true,
  level : 1,
  frameCounter:0
};

var Player_1 = {
  x: 25,
  y: 200,
  height: 25,
  width: 25,
  aerial: false,
  jumpCount: 2,
  previousY: 200,
  previousY2: 2001,
  previousY3: 2002,
  percent: 0,
  velocityY : 0,
  velocityX : 5,
  accelerationY : 0.5,
  accelerationX : 1,
  jump: -10.5,
  up: "w",
  left: "a",
  down: "s",
  right: "d",
  attack: "e",
  special: "r",
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
