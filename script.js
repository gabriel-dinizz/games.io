"use strict";

let randomNumber = Math.trunc(Number(Math.random() * 20 + 1));
document.querySelector(".number").textContent = randomNumber;

let score = document.querySelector(".score").value;
score = 20;

let highScore = function () {
  if (highScore < score) {
    highScore = highScore;
  }
};

document.querySelector(".highScore").textContent =
  highScore =
  highScore +=
    score;

document.querySelector(".check").addEventListener("click", function () {
  let userGuess = Number(document.querySelector(".guess").value);

  if (userGuess === randomNumber) {
    console.log("Correct Number");
    document.querySelector(".message").textContent = "Correct number";
  } else if (userGuess < randomNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Number is higher";
  } else if (userGuess > randomNumber) {
    score--;
    document.querySelector(".score").textContent = score;
    document.querySelector(".message").textContent = "Number is lower";
  }
  console.log(typeof userGuess);
});
