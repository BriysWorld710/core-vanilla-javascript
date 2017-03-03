//
// This is only a SKELETON file for the "Sudoku" exercise. It's been provided as a
// convenience to get you started writing code faster.
//

var Sudoku = function(board) {
  this.board = board;
};

Sudoku.prototype.isSolved = function() {

};

Sudoku.prototype.solve = function() {
  const splitBoard = this.board.split('');
  const boardArray = [];

  // make an array of sudoku board rows
  while(splitBoard.length > 0) {
    boardArray.push(splitBoard.splice(0,9));
  }

  //verify that each row array has no repeats
  let rowCheck = false
  let columnCheck = false
  let boardCheck = false
  boardArray.forEach(function(subArray) {
    let checkingArray = subArray.slice().sort();
    for (let i = 0; i < checkingArray.length; i++) {
      if ( /[0-9]/.test(checkingArray[i]) ) {
        if (checkingArray[i] === checkingArray[i+1]) {
          rowCheck = true
        }
      }
    }
  })

  //verify each column has no repeats
  let boardByColumns = boardArray[0].map(function(column, i) {
    return boardArray.map(function(row) {
      return row[i]
    })
  })

  boardByColumns.forEach(function(subArray) {
    let checkingArray = subArray.slice().sort();
    for (let i = 0; i < checkingArray.length; i++) {
      if ( /[0-9]/.test(checkingArray[i]) ) {
        if (checkingArray[i] === checkingArray[i+1]) {
          columnCheck = true
        }
      }
    }
  })

  //check if a space's row & column contain all numbers 1-9 already
    //iterate through rows
    //for each row:
    //iterate through each values
    // for each value:
    // iterate through row and save numbers -- [allNumbersRowsColumns]
    // use index of value in row to get column
    // iterate through column and save numbers --
      // if value does not exist in the array already --> [allNumbersRowsColumns]
  boardArray.forEach(function(subArray, rowIndex){
    subArray.forEach(function(element, i, self){
      let allNumbersRow = self.filter(function(element) {
        return /[0-9]/.test(element)
      })
      let allNumbersColumn = boardByColumns[i].filter(function(element) {
        return /[0-9]/.test(element)
      })
      let allNumbersRowsColumns = allNumbersColumn.concat(allNumbersRow)
      let uniqueNumbers = allNumbersRowsColumns.filter(
        function(element, index, self) {
          return self.indexOf(element) === index
        }
      )
      if (uniqueNumbers.length === 9) {
        boardCheck = true
      }
    })
  })


  if (rowCheck || columnCheck || boardCheck) {
    return "ERROR: Bad Board"
  }


};

module.exports = Sudoku;
