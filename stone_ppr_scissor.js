let container = document.querySelector(".container");
let playerScore = document.querySelector("#player-score");
let compScore = document.querySelector("#comp-score");

let choice = document.querySelectorAll(".choice");
let result = document.querySelector("#result");
let min = 1;
let max = 3;
let num;
let playerCount = 1;
let computerCount = 1;

let selectedChoice;
choice.forEach((btn) => {
  btn.addEventListener("click", () => {
    selectedChoice = btn.dataset.choice;
    console.log(selectedChoice);
    comp();
  });
});

function comp() {
  num = Math.floor(Math.random() * (max - min + 1)) + min;
  if (num === 1) {
    compChoice = "Rock";
  } else if (num === 2) {
    compChoice = "Paper";
  } else {
    compChoice = "Scissor";
  }
  check(compChoice);
}

function check(value) {
  if (selectedChoice === value) {
    result.textContent = "Draw!";
  } else if (selectedChoice === "Rock" && value === "Scissor") {
    result.textContent =
      "You won! Computer played Scissor. You smashed it with Rock!";
    playerScore.textContent = `Player: ${playerCount++}`;
  } else if (selectedChoice === "Paper" && value === "Rock") {
    result.textContent =
      "Victory! Computer chose Rock, but your Paper wrapped things up.";
    playerScore.textContent = `Player: ${playerCount++}`;
  } else if (selectedChoice === "Scissor" && value === "Paper") {
    result.textContent =
      "You win! Computer tossed Paper, but your Scissors cut right through! ✂️";
    playerScore.textContent = `Player: ${playerCount++}`;
  } else {
    result.textContent = "computer won!";
    compScore.textContent = `Computer: ${computerCount++}`;
  }
}
