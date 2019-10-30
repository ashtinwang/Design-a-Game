function addHealth(damage){
  Player_1.health+=damage;
}
function addDefense(defUp){
  Player_1.defense+=defUp;
}
function changeTapJump(){
  var tapJump = document.getElementById('jump').value;
  if (tapJump.length>1){
Player_1.tapJump=' ';
}else{
  Player_1.tapJump= tapJump;
}
}
