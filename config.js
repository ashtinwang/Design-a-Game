var GAME = {
  canvas : {
    width : 900,
    height : 450
  },
  started : true,
  level : 1,
  frameCounter:0,
};

var Player_1 = {
  health: 100,
  attackVal: 15,
  defense:5,
  x: 50,
  y: 500,
  last: "",
  height: 100,
  fixedHeight: 100,
  width: 100,
  aerial: false,
  jumpCount: 2,
  previousY: 200,
  previousY2: 2001,
  previousY3: 2002,
  percent: 0,
  velocityY : 0,
  kBvelocityX: 0,
  velocityX : 5,
  accelerationY : 0.2,
  accelerationX : 0.7,
  jump: -7.5,
  src: "ninja1.png",
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
  tapJump : " ",
  direction:"right"
};

var Player_2 = {
  health: 100,
  attackVal: 15,
  defense:5,
  x: 850,
  y: 500,
  last: "",
  height: 100,
  fixedHeight: 100,
  width: 100,
  aerial: false,
  jumpCount: 2,
  previousY: 200,
  previousY2: 2001,
  previousY3: 2002,
  percent: 0,
  velocityY : 0,
  kBvelocityX: 0,
  velocityX : 5,
  accelerationY : 0.2,
  accelerationX : 0.7,
  jump: -7.5,
  src: "ninja2.png",
  up: "n", //CHANGE ME!
  left: "ArrowLeft",
  down: "ArrowDown",
  right: "ArrowRight",
  attack: ".",
  special: "r",
  grab: "u",
  taunt: "1",
  shield: "i",
  dash: "j",
  tapJump : "ArrowUp",
  direction:"left"
};
