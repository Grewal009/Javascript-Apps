let input, secretNumber;
let score = 20;
let highScore = 0;
console.log(input);

const secret_noEle = document.querySelector(".secret-no");
const inputEle = document.querySelector("input");
const resultEle = document.querySelector(".result");
const scoreEle = document.querySelector(".score");
const highScoreEle = document.querySelector(".highscore");
const container = document.querySelector(".container");
const checkButton = document.querySelector(".check-btn");
console.log(container);
console.log(secret_noEle);

function getValue(ele) {
  input = Number(ele.value);
  console.log(typeof input, input);
}

function randomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateSecretNumber() {
  secretNumber = randomNumber(1, 20);
  // console.log("secretNumber : ", secretNumber);
  // secret_noEle.textContent = secretNumber;
}
generateSecretNumber();
console.log("secretNumber : ", secretNumber);

function checkGuess() {
  if (input === undefined || input === 0) {
    console.log("Enter number!");
  } else if (input == secretNumber) {
    resultEle.textContent = "Correct number!";
    scoreEle.textContent = "💯 Score : " + score;
    highScoreEle.textContent = "🥇 Highscore : " + score;
    secret_noEle.textContent = secretNumber;
    container.classList.add("win");
    inputEle.classList.add("win");
    inputEle.disabled = true;
    checkButton.disabled = true;

    input = 0;
  } else if (input > secretNumber) {
    resultEle.textContent = "📈 " + input + " is too high!";
    score--;
    scoreEle.textContent = "💯 Score : " + score;
    inputEle.value = "";
    input = 0;
  } else if (input < secretNumber) {
    resultEle.textContent = "📉 " + input + " is too low!";
    score--;
    scoreEle.textContent = "💯 Score : " + score;
    inputEle.value = "";
    input = 0;
  }
}

function playAgain() {
  inputEle.value = "";
  scoreEle.textContent = "💯 Score : " + 20;
  secret_noEle.textContent = "?";
  container.classList.remove("win");
  inputEle.classList.remove("win");

  inputEle.disabled = false;
  checkButton.disabled = false;

  generateSecretNumber();
}
