let currentPlayer = "X";
let gameActive = false;
let moves = 0;
const cells = document.querySelectorAll(".cell");
const message = document.getElementById("message");

function playerMove(cellIndex) {
  if (!gameActive || cells[cellIndex].textContent !== "") return;
  cells[cellIndex].textContent = currentPlayer;
  moves++;
  if (checkWinner(currentPlayer)) {
    message.textContent = `Player ${currentPlayer} wins!`;
    gameActive = false;
  } else if (moves === 9) {
    message.textContent = "It's a draw!";
    gameActive = false;
  } else {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
  }
}

function checkWinner(player) {
  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  return winningCombos.some((combo) => {
    return combo.every((index) => cells[index].textContent === player);
  });
}

function startGame() {
  gameActive = true;
  currentPlayer = "X";
  moves = 0;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  message.textContent = "";
}

function resetGame() {
  gameActive = false;
  currentPlayer = "X";
  moves = 0;
  cells.forEach((cell) => {
    cell.textContent = "";
  });
  message.textContent = "";
}
