
function renderPlayer1(context) {
  var canvas = document.getElementsByClassName('canvas');
  handlePlayer1Movement();
  var ninjaImage = new Image();

  ninjaImage.src = 'ninja1.PNG';
  if (CONTROLS.player1.attack) {
    ninjaImage.src = 'ninjakick.PNG';
  }
  context.drawImage(ninjaImage, Player_1.x, Player_1.y, Player_1.width, Player_1.height);
}

function renderPlayer2(context) {
  var canvas = document.getElementsByClassName('canvas');
  handlePlayer2Movement();
  var ninjaImage = new Image();

  ninjaImage.src = 'ninja2.PNG';
  if (CONTROLS.player2.attack) {
    ninjaImage.src = 'ninjakick.PNG';
  }
  context.drawImage(ninjaImage, Player_2.x, Player_2.y, Player_2.width, Player_2.height);
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
  if (CONTROLS.player1.right == true) {
    Player_1.x += (Player_1.velocityX * Player_1.accelerationX);
  }
  if (Player_1.x >= GAME.canvas.width - Player_1.width) {
    Player_1.x = GAME.canvas.width - Player_1.width;
  }
}

function player1Left() {
  if (CONTROLS.player1.left == true) {
    Player_1.x -= (Player_1.velocityX * Player_1.accelerationX);
  }
  if (Player_1.x < 0) {
    Player_1.x = 0;
  }
}

function player1Crouching() {
  if (CONTROLS.player1.down == true) {
    Player_1.height = (Player_1.fixedHeight / 2);
    Player_1.y += Player_1.height;
  } else {
    Player_1.height = Player_1.fixedHeight;
  }
}

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
  if (CONTROLS.player2.right == true) {
    Player_2.x += (Player_2.velocityX * Player_2.accelerationX);
  }
  if (Player_2.x >= GAME.canvas.width - Player_2.width) {
    Player_2.x = GAME.canvas.width - Player_2.width;
  }
}

function player2Left() {
  if (CONTROLS.player2.left == true) {
    Player_2.x -= (Player_2.velocityX * Player_2.accelerationX);
  }
  if (Player_2.x < 0) {
    Player_2.x = 0;
  }
}

function player2Crouching() {
  if (CONTROLS.player2.down == true) {
    Player_2.height = (Player_2.fixedHeight / 2);
    Player_2.y += Player_2.height;
  } else {
    Player_2.height = Player_2.fixedHeight;
  }
}

function handlePlayer1Movement() {
  player1Crouching();
  player1Jump();
  player1Right();
  player1Left();
}

function handlePlayer2Movement() {
  player2Crouching();
  player2Jump();
  player2Right();
  player2Left();
}

function runGame() {
  changeControls();
  var canvas = document.getElementById('mainCanvas');
  var context = canvas.getContext('2d');
  if (GAME.started) {
    context.clearRect(0, 0, 900, 450);
    renderPlayer1(context);
    renderPlayer2(context);
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
