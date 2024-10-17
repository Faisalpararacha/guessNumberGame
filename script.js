"use strict";
let score = 20;
let highScore = 0;
let secretNumber = Math.trunc(Math.random() * 10 + 1);
document.querySelector(".number").textContent = "?";
// //Reset Game Button//
document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  document.querySelector(".number").textContent = "?";
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  document.querySelector("body").style.backgroundColor = "black";
  document.querySelector(".message").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".guess").value = "";
  document.querySelector(".message").textContent = "Start Guessing . . .";
  document.querySelector(".score").textContent = score;
});

//Check Button??
document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);
  //when there is no input//
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No Number";
  }
  //when there player wins//
  else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "✔ Correct Number";
    score++;
    document.querySelector(".score").textContent = score;
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".message").style.backgroundColor = "red";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = secretNumber;
    if (score > highScore) {
      highScore = score;
      document.querySelector(".highscore").textContent = highScore;
    }
  }
  //When the guess is wrong
  else if (guess !== secretNumber) {
    score--;
    document.querySelector(".message").textContent =
      guess > secretNumber ? "📈 Number High" : "📉 Number is too low";
    document.querySelector(".score").textContent = score;
  }

  //when number is High//
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📈 Number is too High";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   }
  //   //when number is low//
  //   else {
  //     document.querySelector(".message").textContent = "You Loose the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     document.querySelector(".message").textContent = "📉 Number is too low";
  //     score--;
  //     document.querySelector(".score").textContent = score;
  //   } else {
  //     document.querySelector(".message").textContent = "You Loose the Game";
  //     document.querySelector(".score").textContent = 0;
  //   }
  // }
});
