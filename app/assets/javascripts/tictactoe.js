// Code your JavaScript / jQuery solution here
var turn = 0;

const winCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
    ]
function player() {
  if(turn % 2 == 0) {
      return 'X';
  } else {
      return 'O';
  }
}

function updateState(sqr) {
  $(sqr).text(player());

}

function setMessage(message) {
  $("#message").text(message);
}

function checkWinner() {
  var winner = false;
  var board = {};

  $("td").text((index, square) => board[index] = square);

  winCombos.forEach(function(position) {
    if((board[position[0]] == board[position[1]] == board[position[2]]) && board[position[0]] != "") {
      setMessage(`Player ${board[0]} Won!`);
      winner = true;
    }
  });
  return winner;
}
