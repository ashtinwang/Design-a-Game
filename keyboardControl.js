var CONTROLS = {
  player1: {
    jump: false,
    up: false,
    left: false,
    right: false,
    down: false,
    attack: false,
    special: false,
    grab: false,
    taunt: false,
    shield: false,
    dash: false,
    cUp: false,
    cLeft: false,
    cDown: false,
    cRight: false,
    aerialUp: false,
    aerialDown: false,
    aerialForward: false,
    aerialBackward: false,
    specialUp: false,
    specialSide: false,
    specialDown: false
  }
};

document.addEventListener('keydown', function(event){
  switch(event.key){
    case Player_1.tapJump:
  Player_1.jumpCount -=1;
      CONTROLS.player1.jump= true;
      break;
  }
});
document.addEventListener('keyup', function(event){
  switch(event.key){
    case Player_1.up:
    CONTROLS.player1.aerialUp = false;
    CONTROLS.player1.specialDown = false;
    break;
  }
});
