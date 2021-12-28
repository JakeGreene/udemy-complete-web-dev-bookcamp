randomNumber1 = roll(1);
randomNumber2 = roll(2);

function roll(id) {
  face = Math.floor(Math.random() * 6) + 1;
  document.querySelector(".img"+id).setAttribute("src", "images/dice"+face+".png");
  return face;
}

titleText = "";
if (randomNumber1 === randomNumber2) {
  titleText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  titleText = "🚩 Player 1 Wins!";
} else {
  titleText = "Player 2 Wins! 🚩";
}
document.querySelector("h1").innerText = titleText;
