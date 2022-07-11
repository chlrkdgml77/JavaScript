const startGameBtn = document.getElementById('start-game-btn');

const SCISSORS = "가위";
const ROCK = "바위";
const PAPER = "보";
const DEFAULT_USER_CHOICE = ROCK
const DRAW = "DRAW";
const PLAYER_WINS = "PLAYER_WINS";
const COMPUTER_WINS = "COMPUTER_WINS";

let gameIsRunning = false;

const getPlayerChoice = () => {
  const selection = prompt(`${SCISSORS}, ${ROCK} or ${PAPER}?`, "");
  if (selection !== SCISSORS && selection !== ROCK && selection !== PAPER) {
    alert(`유효하지 않은 입력입니다, 기본값으로 설정됩니다.(${DEFAULT_USER_CHOICE})`);
    return DEFAULT_USER_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  }
  else if (randomValue < 0.67) {
    return PAPER;
  }
  else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  return cChoice === pChoice ? DRAW : (cChoice === ROCK && pChoice === PAPER) ||
  (cChoice === PAPER && pChoice === SCISSORS) ||
  (cChoice === SCISSORS && pChoice === ROCK) ? PLAYER_WINS : COMPUTER_WINS; 

  // if (cChoice === pChoice) {
  //   return DRAW;
  // }
  // else if (
  //   (cChoice === ROCK && pChoice === PAPER) ||
  //   (cChoice === PAPER && pChoice === SCISSORS) ||
  //   (cChoice === SCISSORS && pChoice === ROCK)
  //   ) {
  //     return PLAYER_WINS;
  // }
  // else {
  //   return COMPUTER_WINS;
  // }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting..");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(playerSelection, computerSelection);
  console.log(winner);

  let message;
  if (winner === DRAW) {
    message = `플레이어: ${playerSelection}, COM: ${computerSelection} ... 비겼습니다.`;
  }
  else if (winner === PLAYER_WINS) {
    message = `플레이어: ${playerSelection}, COM: ${computerSelection} ... 플레이어가 이겼습니다!.`;
  }
  else {
    message = `플레이어: ${playerSelection}, COM: ${computerSelection} ... 컴퓨터가 이겼습니다...`;
  }
  alert(message);
  gameIsRunning = false;
});


//게임과는 상관없음...
const combine = (resultHandler, operation, ...numbers) => {

  const validateNumber = (number) => {
    return isNaN(number) ? 0 : number;
  };

  let sum = 0;
  for (const num of numbers) {
    if (operation === "ADD") {
      sum += validateNumber(num); 
    }
    else {
      sum -= validateNumber(num); 
    }
  }
  resultHandler(sum);
};

const showResult = (messageText, result) => {
  alert(messageText + " " + result);
};

combine(showResult.bind(this, "모든 수를 더한 값의 결과는: "), "ADD", 12, 50, 72);
combine(showResult.bind(this, "모든 수를 뺀 값의 결과는: "), "SUBTRACT", 12, 50, 72);

