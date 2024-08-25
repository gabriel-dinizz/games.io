"use strict";

let randomNumber = Math.trunc(Number(Math.random() * 20 + 1));
document.querySelector(".number").textContent = randomNumber;

let score = document.querySelector(".score").value;
score = 20;

let highScore = 0;
const highScoreElement = document.querySelector(".highScore");

document.querySelector(".check").addEventListener("click", function () {
  let userGuess = Number(document.querySelector(".guess").value);

  if (userGuess === randomNumber) {
    console.log("Correct Number");
    document.querySelector(".message").textContent = "Correct number";
    if (score > highScore) {
      highScore = score;
      highScoreElement.textContent = highScore;
    }
  } else if (userGuess < randomNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Number is higher";
  } else if (userGuess > randomNumber) {
    score--;
    document.querySelector(".message").textContent = "Number is lower";
  }
  console.log(typeof userGuess);
});

document.querySelector(".again").addEventListener("click", function () {
  document.querySelector(".score").textContent = score = 20;
  document.querySelector(".message").textContent = "Start Guessing";
  randomNumber = document.querySelector(".number").textContent = Math.trunc(
    Number(Math.random() * 20 + 1)
  );
  document.querySelector(".guess").value = " ";
});
