/**all the controls here are for the movement in the animation section
 *any attack will be set to false only when the action is preformed - buffering controls
 *any movement will by set to false when the key is up
 *for player1
 *jump tells us when the player's y level should decrease
 *attack by itself will wait for the GAME framecounter to reach 13 before performing the normal attack
 *when combined with a directional input it will then set the corresponding c(direction) to true
 *otherwise it will wait for another directional input to preform the corresponding c(direction) move and set both it and the attack to false
 *special will work similarly
 *up will be for when the player inputs the up command (NOT JUMP THIS IS FOR ATTACKING)
 *left will move the player to the left, unless combined with either special or normal attack
 *right will move the player to the right, unless combined with either special or nomal attack
 *down will make the player crouch and thus reduce their sprite height
 */
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
    specialRight: false,
    specialLeft: false,
    specialDown: false
  },
  player2: {
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
    specialRight: false,
    specialLeft: false,
    specialDown: false
  }
};

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case Player_2.tapJump:
      Player_2.jumpCount -= 1;
      CONTROLS.player2.jump = true;
      break;
    case Player_2.right:
      if (Player_2.aerial && CONTROLS.player2.attack) {
        CONTROLS.player2.aerialForward = true;
      } else if (CONTROLS.player2.attack) {
        CONTROLS.player2.cRight = true;
      } else if (CONTROLS.player2.special) {
        CONTROLS.player2.specialRight = true;
      } else {
        CONTROLS.player2.right = true;
      }
      break;
    case Player_2.left:
      if (Player_2.aerial && CONTROLS.player2.attack) {
        CONTROLS.Player2.aerialForward = true;
      } else if (CONTROLS.Player2.attack) {
        CONTROLS.Player2.cLeft = true;
      } else if (CONTROLS.Player2.special) {
        CONTROLS.Player2.specialLeft = true;
      } else {
        CONTROLS.Player2.left = true;
      }
      break;
    case Player_2.up:
      if (Player_2.aerial && CONTROLS.Player2.attack) {
        CONTROLS.Player2.aerialForward = true;
      } else if (CONTROLS.Player2.attack) {
        CONTROLS.Player2.cUp = true;
      } else if (CONTROLS.Player2.special) {
        CONTROLS.Player2.specialUp = true;
      } else {
        CONTROLS.Player2.up = true;
      }
      break;
    case Player_2.down:
      if (Player_2.aerial && CONTROLS.Player2.attack) {
        CONTROLS.Player2.aerialForward = true;
      } else if (CONTROLS.Player2.attack) {
        CONTROLS.Player2.cDown = true;
      } else if (CONTROLS.Player2.special) {
        CONTROLS.Player2.specialDown = true;
      } else {
        CONTROLS.Player2.down = true;
      }
      break;
    case Player_2.special:
      CONTROLS.Player2.special = true;
      break;
    case Player_2.attack:
      CONTROLS.Player2.attack = true;
  }
});

document.addEventListener('keydown', function(event) {
  switch (event.key) {
    case Player_1.tapJump:
      Player_1.jumpCount -= 1;
      CONTROLS.player1.jump = true;
      break;
    case Player_1.right:
      if (Player_1.aerial && CONTROLS.player1.attack) {
        CONTROLS.player1.aerialForward = true;
      } else if (CONTROLS.player1.attack) {
        CONTROLS.player1.cRight = true;
      } else if (CONTROLS.player1.special) {
        CONTROLS.player1.specialRight = true;
      } else {
        CONTROLS.player1.right = true;
      }
      break;
    case Player_1.left:
      if (Player_1.aerial && CONTROLS.player1.attack) {
        CONTROLS.player1.aerialForward = true;
      } else if (CONTROLS.player1.attack) {
        CONTROLS.player1.cLeft = true;
      } else if (CONTROLS.player1.special) {
        CONTROLS.player1.specialLeft = true;
      } else {
        CONTROLS.player1.left = true;
      }
      break;
    case Player_1.up:
      if (Player_1.aerial && CONTROLS.player1.attack) {
        CONTROLS.player1.aerialForward = true;
      } else if (CONTROLS.player1.attack) {
        CONTROLS.player1.cUp = true;
      } else if (CONTROLS.player1.special) {
        CONTROLS.player1.specialUp = true;
      } else {
        CONTROLS.player1.up = true;
      }
      break;
    case Player_1.down:
      if (Player_1.aerial && CONTROLS.player1.attack) {
        CONTROLS.player1.aerialForward = true;
      } else if (CONTROLS.player1.attack) {
        CONTROLS.player1.cDown = true;
      } else if (CONTROLS.player1.special) {
        CONTROLS.player1.specialDown = true;
      } else {
        CONTROLS.player1.down = true;
      }
      break;
    case Player_1.special:
      CONTROLS.player1.special = true;
      break;
    case Player_1.attack:
      CONTROLS.player1.attack = true;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case Player_2.right:
      CONTROLS.player2.right = false;
      break;
    case Player_2.left:
      CONTROLS.player2.left = false;
      break;
    case Player_2.up:
      CONTROLS.player2.up = false;
      break;
    case Player_2.down:
      CONTROLS.player2.down = false;
      break;
    case Player_2.attack:
      CONTROLS.player2.attack = false;
      break;
    case Player_2.special:
      CONTROLS.player2.special = false;
      break;
  }
});

document.addEventListener('keyup', function(event) {
  switch (event.key) {
    case Player_1.right:
      CONTROLS.player1.right = false;
      break;
    case Player_1.left:
      CONTROLS.player1.left = false;
      break;
    case Player_1.up:
      CONTROLS.player1.up = false;
      break;
    case Player_1.down:
      CONTROLS.player1.down = false;
      break;
    case Player_1.attack:
      CONTROLS.player1.attack = false;
      break;
    case Player_1.special:
      CONTROLS.player1.special = false;
      break;
  }
});
