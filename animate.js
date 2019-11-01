function renderEnemy(context){
  var canvas = document.getElementsByClassName('canvas');
  handleEnemyMovement();
  var ninjaImage = new Image();
  ninjaImage.src = 'ninja2.PNG';
  context.drawImage(ninjaImage, Enemy.x, Enemy.y, Enemy.width, Enemy.height);
}

function renderPlayer1(context){
  var canvas = document.getElementsByClassName('canvas');
  handlePlayer1Movement();
  var ninjaImage = new Image();
  ninjaImage.src = 'ninja1.PNG';
  context.drawImage(ninjaImage, Player_1.x,Player_1.y, Player_1.width, Player_1.height);
}
//change the GAME.canvas.height-player hieght to check if on a platform
function player1Jump(){
  if (Player_1.y==GAME.canvas.height-Player_1.height && Player_1.y!=0){
    Player_1.jumpCount=2;
    Player_1.aerial=false;
  }
  Player_1.previousY=Player_1.y;
  Player_1.velocityY+=Player_1.accelerationY;
 if (Player_1.jumpCount>0 && CONTROLS.player1.jump){
   Player_1.velocityY = Player_1.jump;
   CONTROLS.player1.jump=false;
   Player_1.aerial=true;
   Player_1.previousY=-1;
 }
 Player_1.y += Player_1.velocityY;
 if (Player_1.y > GAME.canvas.height-Player_1.height){
   Player_1.y = GAME.canvas.height-Player_1.height;
   Player_1.velocityY=0;
 }
 if (Player_1.y < 0){
   Player_1.y = 0;
 }
 CONTROLS.player1.jump=false;
}
function player1Right(){
  if (CONTROLS.player1.right==true){
    Player_1.direction=1;
    Player_1.x+=(Player_1.velocityX*Player_1.accelerationX);
  }
if (Player_1.x>=GAME.canvas.width-Player_1.width){
  Player_1.x=GAME.canvas.width-Player_1.width;
}
}
function player1Left(){
  if (CONTROLS.player1.left==true){
    Player_1.direction=-1;
    Player_1.x-=(Player_1.velocityX*Player_1.accelerationX);
  }
  if (Player_1.x<0){
  Player_1.x=0;
  }
}
function player1Crouching(){
  if (CONTROLS.player1.down==true){
    Player_1.height=(Player_1.fixedHeight/2);
    Player_1.y+=Player_1.height;
  }else{
    Player_1.height=Player_1.fixedHeight;
  }
}
function handlePlayer1Movement(){
  player1Crouching();
  player1Jump();
  player1Right();
  player1Left();
}
//frameCounter is for use of the special attack as laid out in controls
function runGame(){
  changeControls();
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
if (GAME.started) {
  context.clearRect(0, 0, 900, 450);
renderPlayer1(context);
}
window.requestAnimationFrame(runGame);
if (CONTROLS.player1.special){
GAME.frameCounter +=1;
if(GAME.frameCounter>13){
  GAME.frameCounter=0;
}
}
}
window.requestAnimationFrame(runGame);
