var gameStarted = false;
var level = 0;
var gamePattern = [];
var userClickPattern = [];
var buttonColours = ["red", "green", "blue", "yellow"];

$(document).keydown(function(e) {
  if (!gameStarted) {
    gameStarted = true;
    nextSequence();
  }
});

function nextSequence() {
  $("#level-title").html("Level "+level);
  level++;
  var randomColorIdx = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomColorIdx];
  gamePattern.push(randomChosenColour);
  $("#"+randomChosenColour).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

$(".btn").click(function(e) {
  var userChosenColour = e.target.id;
  userClickPattern.push(userChosenColour);
  playSound(userChosenColour);
  console.log(gamePattern);
  console.log(userClickPattern);
  if (correctAnswer()) {
    console.log("Correct");
    if (gamePattern.length === userClickPattern.length) {
      console.log("Finished patterm");
      setTimeout(function() {
        userClickPattern = [];
        nextSequence();
      }, 1000);
    }
  } else {
    console.log("Wrong!");
    playSound("wrong");
    $("#level-title").html("Game Over, Press Any Key to Restart");
    $("body").addClass("game-over");
    setTimeout(function() {
      $("body").removeClass("game-over");
    });
    startOver();
  }
});

function playSound(name) {
  var sound = new Audio("sounds/"+name+".mp3");
  sound.play();
}

function animatePress(name) {
  $("#"+name).addClass("pressed");
  setTimeout(function() {
    $("#"+name).removeClass("pressed");
  }, 100);
}

function correctAnswer() {
  var latest = userClickPattern.length - 1;
  return userClickPattern[latest] === gamePattern[latest];
}

function startOver() {
  level = 0;
  gameStarted = false;
  gamePattern = [];
  userClickPattern = [];
}
