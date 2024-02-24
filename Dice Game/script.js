const root = document.querySelector("#root");

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOnePoints = 0;
let playerTwoPoints = 0;
let activePlayer = "one";
let playing = true;

generateView();
const newGameBtn = document.querySelector(".newGame");
const rollDiceBtn = document.querySelector(".roll-dice");
const holdBtn = document.querySelector(".hold");
const diceEle = document.querySelector(".dice");
const playerOne = document.querySelector(".player-1");
const playerTwo = document.querySelector(".player-2");
const playerOneText = document.querySelector(".playerOneText");
const playerTwoText = document.querySelector(".playerTwoText");

const player1Point = document.querySelector(".player-1-points");
const player1Scores = document.querySelector(".player-1-score");
const player2Point = document.querySelector(".player-2-points");
const player2Scores = document.querySelector(".player-2-score");

function generateView() {
  root.innerHTML =
    /*HTML*/
    `
    <div class="container">
    <div class="player-1 activePlayer">
      <h3 class="playerOneText">PLAYER 1</h3>
      <span class="player-1-score">0</span>
      <div class="player-1-board">
        <span>CURRENT</span>
        <span class="player-1-points">0</span>
      </div>
    </div>

    <div class="player-2">
      <h3 class="playerTwoText">PLAYER 2</h3>
      <span class="player-2-score">0</span>
      <div class="player-2-board">
        <span>CURRENT</span>
        <span class="player-2-points">0</span>
      </div>
    </div>
    <div class="container2">
      <button class="newGame btn">🔄 NEW GAME</button>
     
      <div class="roll-hold">
      <div class="dice-container">
      <img class="dice hidden" alt="image" src="./images/dice-2.png" />
      </div>
        <button class="roll-dice btn">🎲 ROLL DICE</button>
        <button class="hold btn">💰 HOLD</button>
      </div>
    </div>
  </div>
    `;
}

function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function switchPlayer() {
  activePlayer = activePlayer === "one" ? "two" : "one";
  activePlayer == "one"
    ? playerOne.classList.add("activePlayer")
    : playerTwo.classList.add("activePlayer");
}
function disableButtons() {
  rollDiceBtn.disabled = true;
  rollDiceBtn.classList.add("disabled");
  holdBtn.disabled = true;
  holdBtn.classList.add("disabled");
}

rollDiceBtn.addEventListener("click", function () {
  //check for rolled = 1
  if (playing) {
    const diceNo = rollDice();
    console.log(diceNo);
    diceEle.classList.remove("hidden");
    diceEle.src = `./images/dice-${diceNo}.png`;

    if (diceNo !== 1) {
      if (activePlayer === "one") {
        playerOnePoints += diceNo;
        console.log(playerOnePoints);
        player1Point.textContent = playerOnePoints;
      } else {
        playerTwoPoints += diceNo;
        console.log(playerTwoPoints);
        player2Point.textContent = playerTwoPoints;
      }
    } else {
      if (activePlayer === "one") {
        playerOnePoints = 0;
        player1Point.textContent = playerOnePoints;
        playerOne.classList.remove("activePlayer");
      } else {
        playerTwoPoints = 0;
        player2Point.textContent = playerTwoPoints;
        playerTwo.classList.remove("activePlayer");
      }
      switchPlayer();
    }
  }
});

holdBtn.addEventListener("click", function () {
  if (activePlayer === "one") {
    playerOneScore += playerOnePoints;
    playerOnePoints = 0;
    player1Point.textContent = playerOnePoints;
    player1Scores.textContent = playerOneScore;
    if (playerOneScore >= 20) {
      playerOne.classList.add("winner");
      playerOneText.textContent = "PLAYER 1 WINNER 🏆";
      disableButtons();

      playing = false;
      return;
    }
    playerOne.classList.remove("activePlayer");
  } else {
    playerTwoScore += playerTwoPoints;
    playerTwoPoints = 0;
    player2Point.textContent = playerTwoPoints;
    player2Scores.textContent = playerTwoScore;
    if (playerTwoScore >= 20) {
      playerTwo.classList.add("winner");
      playerTwoText.textContent = "PLAYER 2 WINNER 🏆";
      disableButtons();
      playing = false;
      return;
    }
    playerTwo.classList.remove("activePlayer");
  }

  switchPlayer();
});
