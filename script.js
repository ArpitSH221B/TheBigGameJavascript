"use strict";

const FirstPerson = prompt("Enter Player1 Name!!!");
const SecondPerson = prompt("Enter Player2 Name!!!");

const player0Name = document.querySelector("#name--0");
const player1Name = document.querySelector("#name--1");

player0Name.textContent = FirstPerson;
player1Name.textContent = SecondPerson;

const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");

const scorePlayer0 = document.querySelector("#score--0");
const scorePlayer1 = document.querySelector("#score--1");

const currentScorePlayer0 = document.querySelector("#current--0");
const currentScorePlayer1 = document.querySelector("#current--1");

const diceImage = document.querySelector(".dice");

scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;
diceImage.classList.add("hidden");

const toggleActive = function () {
  if (player0.classList.contains("player--active")) {
    player0.classList.remove("player--active");
    scorePlayer0.textContent =
      Number(scorePlayer0.textContent) +
      Number(currentScorePlayer0.textContent);
    currentScorePlayer0.textContent = 0;
    player1.classList.add("player--active");
    if (scorePlayer0.textContent >= 100) {
      player0Name.textContent = `🥳🎉 ${FirstPerson} Wins🥳🎉`;
      HoldDice.classList.add("hidden");
      RollDice.classList.add("hidden");
      diceImage.classList.add("hidden");
    }
  } else if (player1.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    scorePlayer1.textContent =
      Number(scorePlayer1.textContent) +
      Number(currentScorePlayer1.textContent);
    currentScorePlayer1.textContent = 0;
    player0.classList.add("player--active");
    if (scorePlayer1.textContent >= 100) {
      player1Name.textContent = `🥳🎉${SecondPerson} Wins🥳🎉`;
      HoldDice.classList.add("hidden");
      RollDice.classList.add("hidden");
      diceImage.classList.add("hidden");
    }
  }
};

const diceRoll = function () {
  let randomVal = Math.floor(Math.random() * 6 + 1);
  console.log(randomVal);
  if (randomVal != 1) {
    diceImage.classList.remove("hidden");
    diceImage.src = `dice-${randomVal}.png`;
    if (player0.classList.contains("player--active")) {
      currentScorePlayer0.textContent =
        Number(currentScorePlayer0.textContent) + randomVal;
    } else if (player1.classList.contains("player--active")) {
      currentScorePlayer1.textContent =
        Number(currentScorePlayer1.textContent) + randomVal;
    }
  } else if (randomVal == 1) {
    diceImage.src = `dice-${randomVal}.png`;
    toggleActive();
  }
};

const newGame = function () {
  if (!player0.classList.contains("player--active")) {
    player1.classList.remove("player--active");
    player0.classList.add("player--active");
  }
  player0Name.textContent = prompt("Enter Player1 Name!!!");
  player1Name.textContent = prompt("Enter Player2 Name!!!");
  scorePlayer0.textContent = 0;
  scorePlayer1.textContent = 0;
  currentScorePlayer0.textContent = 0;
  currentScorePlayer1.textContent = 0;
  diceImage.classList.add("hidden");
  HoldDice.classList.remove("hidden");
  RollDice.classList.remove("hidden");
};

const RollDice = document.querySelector(".btn--roll");
RollDice.addEventListener("click", diceRoll);

const HoldDice = document.querySelector(".btn--hold");
HoldDice.addEventListener("click", toggleActive);

const NewGame = document.querySelector(".btn--new");
NewGame.addEventListener("click", newGame);