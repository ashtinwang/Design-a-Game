//all the add$ functions add the value in parenthesis to the corresponding Player_1.$ value
function addHealth(damage){
  Player_1.health+=damage;
}
function addDefense(defUp){
  Player_1.defense+=defUp;
}
function addSpeed(xVel){
  Player_1.accelerationX+=xVel;
}
function addJumpHeight(yVel){
  Player_1.jump-=yVel;
}
//all the change$ functions change the value for Player_1.$ with whatver value is in the corresponding box
function changeTapJump(){
  var tapJump = document.getElementById('jump').value;
  if (tapJump.length>1){
Player_1.tapJump=' ';
}else{
  Player_1.tapJump= tapJump;
}
}
function changeUp(){
  var up = document.getElementById('up').value;
  if (up.length>1){
Player_1.up='w';
}else{
  Player_1.up= up;
}
}
function changeLeft(){
  var left = document.getElementById('left').value;
  if (left.length>1){
Player_1.left='a';
}else{
  Player_1.left= left;
}
}
function changeRight(){
  var right = document.getElementById('right').value;
  if (right.length>1){
Player_1.right='d';
}else{
  Player_1.right= right;
}
}
function changeTapJump(){
  var tapJump = document.getElementById('jump').value;
  if (tapJump.length>1){
Player_1.tapJump=' ';
}else{
  Player_1.tapJump= tapJump;
}
}
function changeDown(){
  var down = document.getElementById('down').value;
  if (down.length>1){
Player_1.down='s';
}else{
  Player_1.down= down;
}
}
function changeAttack(){
  var attack = document.getElementById('attack').value;
  if (attack.length>1){
Player_1.attack='e';
}else{
  Player_1.attack= attack;
}
}
function changeSpecial(){
  var special = document.getElementById('special').value;
  if (special.length>1){
Player_1.special='r';
}else{
  Player_1.special= special;
}
}
function changeGrab(){
  var grab = document.getElementById('grab').value;
  if (grab.length>1){
Player_1.grab='u';
}else{
  Player_1.grab= grab;
}
}
function changeTaunt(){
  var taunt = document.getElementById('taunt').value;
  if (taunt.length>1){
Player_1.taunt='1';
}else{
  Player_1.taunt= taunt;
}
}
function changeShield(){
  var shield = document.getElementById('shield').value;
  if (shield.length>1){
Player_1.shield='i';
}else{
  Player_1.shield= shield;
}
}
function changeDash(){
  var dash = document.getElementById('j').value;
  if (dash.length>1){
Player_1.dash='j';
}else{
  Player_1.dash= dash;
}
}
function changeCUp(){
  var cUp = document.getElementById('.').value;
  if (cUp.length>1){
Player_1.cUp='k';
}else{
  Player_1.cUp= cUp;
}
}
function changeCDown(){
  var cDown = document.getElementById('cDown').value;
  if (cDown.length>1){
Player_1.cDown='.';
}else{
  Player_1.cDown= cDown;
}
}
function changeCRight(){
  var cRight = document.getElementById('cRight').value;
  if (cRight.length>1){
Player_1.cRight='m';
}else{
  Player_1.cRight= cRight;
}
}
function changeCLeft(){
  var cLeft = document.getElementById('cLeft').value;
  if (cLeft.length>1){
Player_1.cLeft='n';
}else{
  Player_1.cLeft= cLeft;
}
}
//calls all previoulsy defined changeControls
function changeControls(){
  changeTapJump();
  changeUp();
  changeDown();
  changeLeft();
  changeRight();
}
