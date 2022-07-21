const openPlayerConfig = (event) => {
  const selectedPlayerId = parseInt(event.target.dataset.playerid);
  editPlayer = selectedPlayerId;

  playerConfigOverlayEl.style.display = "block";
  backdropEl.style.display = "block";
}
const cancelPlayerConfig = () => {
  playerConfigOverlayEl.style.display = "none";
  backdropEl.style.display = "none";
  addErrorEl.classList.remove("error");
  errorEl.textContent = "";
  const reset = document.getElementById("playername");
  reset.value = "";
}

const savePlayerConfig = (event) => {
  event.preventDefault();

  const formData = new FormData(event.target);
  const enteredPlayername = formData.get("playername");

  if (enteredPlayername.trim().length === 0) {
    addErrorEl.classList.add("error");
    errorEl.textContent = "유효하지 않은 입력입니다."
    return;
  }

  const updatedPlayerDataEl = document.getElementById(`player-${editPlayer}-data`);
  updatedPlayerDataEl.children[1].textContent = enteredPlayername; 

  players[editPlayer - 1].name = enteredPlayername;

  cancelPlayerConfig();
}