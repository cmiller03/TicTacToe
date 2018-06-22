handleClick = function(event) {
    var cell = event.target;
  
    cell.innerHTML = currentPlayer;
  
    if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
    if(checkWinner()) {
      alert(currentPlayer + " won!")
    }

    playerSelections.push(parseInt(cell.id));
    checkDraw();
    // resetGame();
  
    // Swap players
    currentPlayer = nextPlayer;
  }
  
var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
  

  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
  }

  
  function checkWinner() {
    console.log("check")
    // Check if player has all values of each combination
    for(var i = 0; i < winningCombinations.length; i++) {
        var combination = winningCombinations[i];
        var matches = 0;
        for (var j = 0; j < 3; j++) {
          var cell = document.getElementById(combination[j])
          if (cell.innerHTML === currentPlayer){
            matches++
            if (matches === 3){
              return true;
              }
            }
          else break 
        }
      }
    return false
    }
    function checkDraw() {
      console.log(playerOSelections.length)
      console.log(playerXSelections.length)
      if(playerOSelections.length + playerXSelections.length >= cells.length && checkWinner() === false) {
        alert("It's a draw!")
      }

    } 
    // function resetGame() {
    //   if(playerOSelections.length + playerXSelections.length >= cells.length) {
    //     cell.innerHTML = "";
    //   }
    //   if(checkwinner() === true) {
    //     cell.innerHTML = "";
    //   }
    //   // playerXSelections = new Array();
    //   // playerOSelections = new Array();
    //   // for(var i = 0; i < cells.length; i++) {
    //   //   cells[i].innerHTML = "";
    //   // }
    // }
