const startNewGame = () => {
  if (players[0].name === "" || players[1].name === "") {
    return;
  }
  else {
    currPlayer.textContent = players[activePlayer].name;
    gameAreaEl.style.display = "block";
  }
}

const switchPlayer = () => {
  if (activePlayer === 0) {
    activePlayer = 1;
  }
  else {
    activePlayer = 0;
  }
  currPlayer.textContent = players[activePlayer].name;
}

const selectGameField = (event) => {
  const selectedCol = event.target.dataset.col - 1;
  const selectedRow = event.target.dataset.row - 1;

  if (gameData[selectedRow][selectedCol] !== 0) {
    return;
  }

  event.target.textContent = players[activePlayer].symbol;
  event.target.classList.add("disabled");

  gameData[selectedRow][selectedCol] = activePlayer + 1;

  switchPlayer();
}