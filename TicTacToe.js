let tableValues = ["-1", "-2", "-3", "-4", "-5", "-6", "-7", "-8", "-9"];
let currentPlayer = "X";
let switchPlayer = 1;
let filledCellCnt = 0;
let gameEnd = false;

document.getElementById("status").innerHTML = "Let's go, " + currentPlayer + "!";

function play(cellNr) {
  if (gameEnd == false)
    fillCell(cellNr);
}

function fillCell(cell) {
  document.getElementById(cell).innerHTML = currentPlayer;
  tableValues[cell] = currentPlayer;
  ++filledCellCnt;
  switcher();
  document.getElementById("status").innerHTML = "Let's go, " + currentPlayer + "!";
  gameStatusCheck(tableValues[cell]);
}

function switcher() {
  if (switchPlayer) {
    currentPlayer = "0";
    switchPlayer = 0;
  } else {
    currentPlayer = "X";
    switchPlayer = 1;
  }
}

function gameStatusCheck(player) {
  if ((tableValues[0] == tableValues[4] && tableValues[4] == tableValues[8]) || 
      (tableValues[2] == tableValues[4] && tableValues[4] == tableValues[6])) {
    declaringTheWinner(player, 1);
  }
  for (let index = 0; index < tableValues.length && gameEnd == false; index += 3) {
    if (tableValues[index] == tableValues[index + 1] && tableValues[index + 1] == tableValues[index + 2]) {
      declaringTheWinner(player, 1);
    }
  }
  for (let index = 0; index <= 2 && gameEnd == false; ++index) {
    if (tableValues[index] == tableValues[index + 3] && tableValues[index + 3] == tableValues[index + 6]) {
      declaringTheWinner(player, 1);
    }
  }
  if (filledCellCnt == tableValues.length && gameEnd == false) {
    declaringTheWinner("Draw", 0);
  }
}

function declaringTheWinner(winnerDraw, messageToshow) {
  gameEnd = true;
  if (messageToshow) {
    document.getElementById("status").style.color = "green";
    document.getElementById("status").innerHTML = "The winner is: " + winnerDraw + "!";
    restartGame();
  } else {
    document.getElementById("status").style.color = "blue";
    document.getElementById("status").innerHTML = winnerDraw + "!";
    restartGame();
  }
}

function restartGame() {
  const button = document.createElement("button");
  button.innerText = "Restart the game!";
  button.addEventListener("click", function () {
    location.reload();
  });
  document.body-restart.appendChild(button);
}