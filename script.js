let currentPlayer = "X";
let gameEnded = false;
const cells = document.getElementsByClassName("cell");

function makeMove(index) {
  if (!gameEnded && cells[index].innerText === "") {
    cells[index].innerText = currentPlayer;
    cells[index].classList.add(currentPlayer);
    currentPlayer = (currentPlayer === "X") ? "O" : "X";
    checkWin();
    checkDraw();
  }
}

function checkWin() {
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ];

  for (const combination of winningCombinations) {
    if (cells[combination[0]].innerText === currentPlayer &&
        cells[combination[1]].innerText === currentPlayer &&
        cells[combination[2]].innerText === currentPlayer) {
      endGame(currentPlayer + " wins!");
      return;
    }
  }
}

function checkDraw() {
  let draw = true;
  for (const cell of cells) {
    if (cell.innerText === "") {
      draw = false;
      break;
    }
  }
  if (draw) {
    endGame("It's a draw!");
  }
}

function endGame(message) {
  gameEnded = true;
  alert(message);
}

function resetGame() {
  gameEnded = false;
  currentPlayer = "X";
  for (const cell of cells) {
    cell.innerText = "";
    cell.classList.remove("X", "O");
  }
}
