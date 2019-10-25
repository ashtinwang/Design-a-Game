function initializeNerd(){

}
function renderNinja(context){
  var canvas = document.getElementsByClassName('canvas');
  var ninjaImage = new Image();
  ninjaImage.src = 'ninja1.PNG';
  context.drawImage(ninjaImage, Player_1.y,Player_1.y, 25, 25);
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
