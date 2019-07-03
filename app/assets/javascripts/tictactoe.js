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
  var board = {};
  var winner = false;

  $('td').text((index, square) => board[index] = square);

  winCombos.some(function(combo) {
    if (board[combo[0]] !== "" && board[combo[0]] === board[combo[1]] && board[combo[1]] === board[combo[2]]) {
      setMessage(`Player ${board[combo[0]]} Won!`);
      return winner = true;
    }
  });

  return winner;
}

function doTurn(sqr) {
  updateState(sqr);
  if(checkWinner() == false) {
      setMessage(`Tie game.`);
      turn++;
  } else {
      turn = 0;
      $("td").text("");
  }
}

function attachListeners() {
  $("td").on('click', function() {
    if(!$.text(this) && !checkWinner()){
      doTurn(this);
    }
  })
}
