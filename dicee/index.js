randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", "images/dice"+randomNumber1+".png");
randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", "images/dice"+randomNumber2+".png");
titleText = "";
if (randomNumber1 === randomNumber2) {
  titleText = "Draw!";
} else if (randomNumber1 > randomNumber2) {
  titleText = "🚩 Player 1 Wins!";
} else {
  titleText = "Player 2 Wins! 🚩";
}
document.querySelector("h1").innerText = titleText;
