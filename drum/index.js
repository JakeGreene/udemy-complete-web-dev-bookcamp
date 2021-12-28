var sounds = {
  "w": new Audio("sounds/crash.mp3"),
  "a": new Audio("sounds/kick-bass.mp3"),
  "s": new Audio("sounds/snare.mp3"),
  "d": new Audio("sounds/tom-1.mp3"),
  "j": new Audio("sounds/tom-2.mp3"),
  "k": new Audio("sounds/tom-3.mp3"),
  "l": new Audio("sounds/tom-4.mp3")
}
var buttons = document.querySelectorAll(".drum");
for (var i = 0; i < buttons.length; i++){
  buttons[i].addEventListener("click", handleClick);
}

function handleClick() {
  // var audio = new Audio("sounds/tom-1.mp3")
  // audio.play();
  button = this.innerHTML;
  sounds[button].play();
}
