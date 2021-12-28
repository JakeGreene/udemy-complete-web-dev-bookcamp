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
  buttons[i].addEventListener("click", playSoundClick);
}
document.addEventListener("keydown", playSoundKey);

function playSoundClick() {
  button = this.innerHTML;
  playSound(button);
}

function playSoundKey(event) {
  button = event.key;
  playSound(button);
}

function playSound(button) {
  console.log(button);
  sounds[button].play();
}
