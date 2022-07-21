let editPlayer = 0;
let activePlayer = 0;

const gameData = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
]

const players = [
  {
    name: "",
    symbol: "X"
  },
  {
    name: "",
    symbol: "O"
  }
];

const playerConfigOverlayEl = document.getElementById("config-overlay");
const backdropEl = document.getElementById("backdrop");

const formEl = document.querySelector("form");
const errorEl = document.getElementById("config-errors");
const addErrorEl = document.getElementById("form-control");
const gameAreaEl = document.getElementById("active-game");
const currPlayer = document.getElementById("active-player-name");

const editPlayer1BtnEl = document.getElementById("edit-player-1-btn");
const editPlayer2BtnEl = document.getElementById("edit-player-2-btn");
const cancelConfigBtnEl = document.getElementById("cancel-config-btn");
const startNewGameBtnEl = document.getElementById("start-game-btn");
const gameFieldEl = document.querySelectorAll("#game-board li");

editPlayer1BtnEl.addEventListener("click", openPlayerConfig);
editPlayer2BtnEl.addEventListener("click", openPlayerConfig);
cancelConfigBtnEl.addEventListener("click", cancelPlayerConfig);
backdropEl.addEventListener("click", cancelPlayerConfig);
startNewGameBtnEl.addEventListener("click", startNewGame);

formEl.addEventListener("submit", savePlayerConfig)

for (const gameField of gameFieldEl) {
  gameField.addEventListener("click", selectGameField);
}