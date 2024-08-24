"use strict";

let randomNumber = Math.trunc(Number(Math.random() * 20 + 1));
document.querySelector(".number").textContent = randomNumber;

document.querySelector(".check").addEventListener("click", function () {
  let userGuess = Number(document.querySelector(".guess").value);

  if (userGuess === randomNumber) {
    console.log("Correct Number");
    document.querySelector(".message").textContent = "Correct number";
  } else if (userGuess < randomNumber) {
    document.querySelector(".message").textContent = "Number is higher";
  } else if (userGuess > randomNumber) {
    document.querySelector(".message").textContent = "Number is lower";
  }
  console.log(typeof userGuess);
});
