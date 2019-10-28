function initializePlayer_1(){

}
function renderNinja(context){
  var canvas = document.getElementsByClassName('canvas');
  handleNinjaMovement();
  var ninjaImage = new Image();
  ninjaImage.src = 'ninja1.PNG';
  context.drawImage(ninjaImage, Player_1.x,Player_1.y, 25, 25);
}
//change the GAME.canvas.height-25 to check if on a platform
function handleNinjaMovement(){
  if (Player_1.y==GAME.canvas.height-25 && Player_1.y!=0){
    Player_1.jumpCount=2;
  }
  Player_1.previousY=Player_1.y;
  Player_1.velocity+=Player_1.acceleration;
 if (Player_1.jumpCount>0 && CONTROLS.player1.jump){
   Player_1.velocity = Player_1.jump;
   CONTROLS.player1.jump=false;
   Player_1.previousY=-1;
 }
 Player_1.y += Player_1.velocity;
 if (Player_1.y > GAME.canvas.height-25){
   Player_1.y = GAME.canvas.height-25;
   Player_1.velocity=0;
 }
 if (Player_1.y < 0){
   Player_1.y = 0;
 }
 CONTROLS.player1.jump=false;
}

function runGame(){
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
if (GAME.started) {
  context.clearRect(0, 0, 600, 300);
renderNinja(context);
}else{
  context.font = "30px Arial";
  context.fillText("Game Over      Level " + GAME.level, 135, 200);
}
window.requestAnimationFrame(runGame);
}

window.requestAnimationFrame(runGame);
