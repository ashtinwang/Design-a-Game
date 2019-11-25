function renderPlayer1(context) {
  var canvas = document.getElementsByClassName('canvas');
  handlePlayer1Movement();

  var ninja1Image = new Image();
  ninja1Image.src = Player_1.src;

  context.drawImage(ninja1Image, Player_1.x, Player_1.y, Player_1.width, Player_1.height);
}

function renderPlayer2(context) {
  var canvas = document.getElementsByClassName('canvas');
  handlePlayer2Movement();

  var ninja2Image = new Image();
  ninja2Image.src = Player_2.src;

  context.drawImage(ninja2Image, Player_2.x, Player_2.y, Player_2.width, Player_2.height);
}

//change the GAME.canvas.height-player hieght to check if on a platform
function player1Jump() {
  if (Player_1.y == GAME.canvas.height - Player_1.height && Player_1.y != 0) {
    Player_1.jumpCount = 2;
    Player_1.aerial = false;
  }
  Player_1.previousY = Player_1.y;
  Player_1.velocityY += Player_1.accelerationY;
  if (Player_1.jumpCount > 0 && CONTROLS.player1.jump) {
    Player_1.velocityY = Player_1.jump;
    CONTROLS.player1.jump = false;
    Player_1.aerial = true;
    Player_1.previousY = -1;
  }
  Player_1.y += Player_1.velocityY;
  if (Player_1.y > GAME.canvas.height - Player_1.height) {
    Player_1.y = GAME.canvas.height - Player_1.height;
    Player_1.velocityY = 0;
  }
  if (Player_1.y < 0) {
    Player_1.y = 0;
  }
  CONTROLS.player1.jump = false;
}

function player1Right() {
  if (CONTROLS.player1.right == true && Player_1.x <= (GAME.canvas.width - Player_1.width)) {
    Player_1.x += (Player_1.velocityX * Player_1.accelerationX);
    Player_1.last = "right";
  }
}

function player1Left() {
  if (CONTROLS.player1.left == true && Player_1.x > 0) {
    Player_1.x -= (Player_1.velocityX * Player_1.accelerationX);
    Player_1.last = "left";
  }
}

function player1Crouching() {
  if (CONTROLS.player1.down == true) {
    Player_1.height = (Player_1.fixedHeight / 1.25);
    Player_1.y += Player_1.height;
  } else {
    Player_1.height = Player_1.fixedHeight;
  }
}

function player1Attack() {
  var landed = false;

  if (CONTROLS.player1.attack) {
    //Change sprite

    //Right Kick
    if (Player_1.x <= Player_2.x + Player_2.width / 2) {
      Player_1.src = "ninja1KickRight.png";
      //Hitboxes
      if ((Player_1.x + Player_1.width) >= Player_2.x && (Player_1.x + Player_1.width) <= (Player_2.x + Player_2.width / 2)) {
        landed = true;
      }
    }
    //Left Kick
    if (Player_1.x >= (Player_2.x + Player_2.width / 2)) {
      Player_1.src = "ninja1KickLeft.png";
      //Hitboxes
      if (Player_1.x >= (Player_2.x + (Player_2.width / 2)) && Player_1.x < (Player_2.x + Player_2.width)) {
        landed = true;
      }
    }
    console.log(Player_1.x, Player_2.x + Player_2.width / 2);
    //Did the attack land?

    if (landed) {
      console.log("Player1 Landed");
      //modify health first
      modHealth(Player_1.attack);
      //handle knockback
      if (Player_1.src = "ninja1KickRight.png") {
        Player_2.velocityX = 5;
      } else if (Player_1.src = "ninja1KickLeft.png") {
        Player_2.velocityX = -5;
      }
    }
  } else {

    Player_1.src = "ninja1.png";
  }

}

///////////////////////////

function player2Jump() {
  if (Player_2.y == GAME.canvas.height - Player_2.height && Player_2.y != 0) {
    Player_2.jumpCount = 2;
    Player_2.aerial = false;
  }
  Player_2.previousY = Player_2.y;
  Player_2.velocityY += Player_2.accelerationY;
  if (Player_2.jumpCount > 0 && CONTROLS.player2.jump) {
    Player_2.velocityY = Player_2.jump;
    CONTROLS.player2.jump = false;
    Player_2.aerial = true;
    Player_2.previousY = -1;
  }
  Player_2.y += Player_2.velocityY;
  if (Player_2.y > GAME.canvas.height - Player_2.height) {
    Player_2.y = GAME.canvas.height - Player_2.height;
    Player_2.velocityY = 0;
  }
  if (Player_2.y < 0) {
    Player_2.y = 0;
  }
  CONTROLS.player2.jump = false;
}

function player2Right() {
  if (CONTROLS.player2.right == true && Player_2.x <= (GAME.canvas.width - Player_2.width)) {
    Player_2.x += (Player_2.velocityX * Player_2.accelerationX);
  }
  Player_2.last = "right";
}

function player2Left() {
  if (CONTROLS.player2.left == true && Player_2.x > 0) {
    Player_2.x -= (Player_2.velocityX * Player_2.accelerationX);
    Player_2.last = "left";
  }
}

function player2Crouching() {
  if (CONTROLS.player2.down == true) {
    Player_2.height = (Player_2.fixedHeight / 1.25);
    Player_2.y += Player_2.height;
  } else {
    Player_2.height = Player_2.fixedHeight;
  }
}

function player2Attack() {
  var landed2 = false;

  if (CONTROLS.player2.attack) {
    //Change sprite

    //Right Kick
    if (Player_1.x + (Player_1.width / 2) >= Player_2.x + (Player_2.width / 2)) {
      Player_2.src = "ninja2KickRight.png";
      //Hitboxes
      if ((Player_2.x + Player_2.width) >= Player_1.x && (Player_2.x + Player_2.width) <= (Player_1.x + Player_1.width / 2)) {
        landed = true;
      }
    }
    //Left Kick
    if ((Player_1.x + (Player_1.width / 2)) <= Player_2.x + (Player_2.width / 2)) {
      Player_2.src = "ninja2KickLeft.png";
      //Hitboxes
      if (Player_2.x >= (Player_1.x + (Player_1.width / 2)) && Player_2.x <= (Player_1.x + Player_1.width)) {
        landed2 = true;
      }
    }

    //Did the attack land?

    if (landed2) {
      console.log("Player2 Landed");
      //modify health first
      modHealth(Player_2.attack);
      //handle knockback
      if (Player_2.src = "ninja2KickRight.png") {
        Player_1.velocityX = 5;
      } else if (Player_2.src = "ninja2KickLeft.png") {
        Player_1.velocityX = -5;
      }
    }
  } else {

    Player_2.src = "ninja2.png";
  }

}

function handlePlayer1Movement() {
  player1Crouching();
  player1Jump();
  player1Right();
  player1Left();
  player1Attack();

  if (Player_1.kBvelocityX > 0) {
    Player_1.kBvelocityX--;
    Player_1.x += Player_1.kbVelocity;
  }
  if (Player_1.kBvelocityX < 0) {
    Player_1.kBvelocityX++;
    Player_1.x -= Player_1.kbVelocity;

  }
}

function handlePlayer2Movement() {
  player2Crouching();
  player2Jump();
  player2Right();
  player2Left();
  player2Attack();

  if (Player_2.kBvelocityX > 0) {
    Player_2.kBvelocityX--;
  }
  if (Player_2.kBvelocityX < 0) {
    Player_2.kBvelocityX++;
  }
}

function runGame() {
  changeControls();
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {
    context.clearRect(0, 0, 900, 450);
    context.font = "20px Arial";
    renderPlayer1(context);
    renderPlayer2(context);
    context.fillText('Player 1 Health: ' + Player_1.health, 0, 20);
    context.fillText('Player 2 Health: ' + Player_2.health, 715, 20);
  }
  window.requestAnimationFrame(runGame);
  if (CONTROLS.player1.special) {
    GAME.frameCounter += 1;
    if (GAME.frameCounter > 13) {
      GAME.frameCounter = 0;
    }
  }
}
window.requestAnimationFrame(runGame);
