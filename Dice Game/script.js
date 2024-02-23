const root = document.querySelector("#root");

let playerOneScore = 0;
let playerTwoScore = 0;
let playerOnePoints = 0;
let playerTwoPoints = 0;

generateView();

function generateView() {
  root.innerHTML =
    /*HTML*/
    `
    <div class="container">
    <div class="player-1">
      <h3>PLAYER 1</h3>
      <span class="player-1-score">${playerOneScore}</span>
      <div class="player-1-board">
        <span>CURRENT</span>
        <span class="player-1-points">${playerOnePoints}</span>
      </div>
    </div>

    <div class="player-2">
      <h3>PLAYER 2</h3>
      <span class="player-2-score">${playerTwoScore}</span>
      <div class="player-2-board">
        <span>CURRENT</span>
        <span class="player-2-points">${playerTwoPoints}</span>
      </div>
    </div>
    <div class="container2">
      <div class="newGame btn">🔄 NEW GAME</div>
     
      <div class="roll-hold">
      <div class="dice-container">
      <img class="dice hidden" alt="image" src="./images/dice-1.png" />
      </div>
        <div class="roll-dice btn">🎲 ROLL DICE</div>
        <div class="hold btn">💰 HOLD</div>
      </div>
    </div>
  </div>
    `;
}
