const playerConfigOverlayEl = document.getElementById("config-overlay");
const backdropEl = document.getElementById("backdrop");

const editPlayer1BtnEl = document.getElementById("edit-player-1-btn");
const editPlayer2BtnEl = document.getElementById("edit-player-2-btn");

editPlayer1BtnEl.addEventListener("click", openPlayerConfig);
editPlayer2BtnEl.addEventListener("click", openPlayerConfig);