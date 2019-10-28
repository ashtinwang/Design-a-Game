function startGame(){
  initializePlayer_1();
}
function runHomeScreen(){
  var canvas = document.getElementById('mainCanvas');
var context = canvas.getContext('2d');
if (GAME.started) {
  context.clearRect(0, 0, 600, 300);
  drawOptionsMenu(context);
  drawStartButton(context);
  drawSkillTreeButton(context)
}else{
  context.font = "30px Arial";
  context.fillText("Game Over      Level " + GAME.level, 135, 200);
}
window.requestAnimationFrame(runHomeScreen);

}
function drawOptionsMenu(context){
  var canvas = document.getElementById('canvas');
  var optionsImage = new Image();
  optionsImage.src = 'Options.png';
  context.drawImage(optionsImage, 0,250,50,50);
}
function drawStartButton(context){
  var canvas = document.getElementById('canvas');
  var startButton = new Image();
  startButton.src = 'start.png';
  context.drawImage(startButton, 250,125,100,50);
}
function drawSkillTreeButton(context){
  var canvas = document.getElementById('canvas');
  var skillTree = new Image();
  skillTree.src = 'skilltree.jpg';
  context.drawImage(skillTree, 550, 0, 50,50);
}
window.requestAnimationFrame(runHomeScreen);
