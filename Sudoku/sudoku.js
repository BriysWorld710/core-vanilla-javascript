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
  let boxCheck = false
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

  //hardcoding because figuring out a functional algorithm for this part is
  //insanely hard.
  function checkBox(box) {
    let checkingBox = box.slice().sort()
    console.log(box)
    for (let i = 0; i < checkingBox.length; i++) {
      if ( /[0-9]/.test(checkingBox[i]) ) {
        if (checkingBox[i] === checkingBox[i+1]) {
          boxCheck = true
        }
      }
    }
  }
  //Top Box Row
  let boxOneRowOne = [ boardArray[0][0], boardArray[0][1], boardArray[0][2] ]
  let boxOneRowTwo = [ boardArray[1][0], boardArray[1][1], boardArray[1][2] ]
  let boxOneRowThree = [ boardArray[2][0], boardArray[2][1], boardArray[2][2] ]
  let wholeBoxOne = boxOneRowOne.concat(boxOneRowTwo).concat(boxOneRowThree)
  checkBox(wholeBoxOne)

  let boxTwoRowOne = [ boardArray[0][3], boardArray[0][4], boardArray[0][5] ]
  let boxTwoRowTwo = [ boardArray[1][3], boardArray[1][4], boardArray[1][5] ]
  let boxTwoRowThree = [ boardArray[2][3], boardArray[2][4], boardArray[2][5] ]
  let wholeBoxTwo = boxTwoRowOne.concat(boxTwoRowTwo).concat(boxTwoRowThree)
  checkBox(wholeBoxTwo)

  let boxThreeRowOne = [ boardArray[0][6], boardArray[0][7], boardArray[0][8] ]
  let boxThreeRowTwo = [ boardArray[1][6], boardArray[1][7], boardArray[1][8] ]
  let boxThreeRowThree = [ boardArray[2][6], boardArray[2][7], boardArray[2][8] ]
  let wholeBoxThree = boxThreeRowOne.concat(boxThreeRowTwo).concat(boxThreeRowThree)
  checkBox(wholeBoxThree)

  //Middle Box Row
  let boxFourRowOne = [ boardArray[3][0], boardArray[3][1], boardArray[3][2] ]
  let boxFourRowTwo = [ boardArray[4][0], boardArray[4][1], boardArray[4][2] ]
  let boxFourRowThree = [ boardArray[5][0], boardArray[5][1], boardArray[5][2] ]
  let wholeBoxFour = boxFourRowOne.concat(boxFourRowTwo).concat(boxFourRowThree)
  checkBox(wholeBoxFour)

  let boxFiveRowOne = [ boardArray[3][3], boardArray[3][4], boardArray[3][5] ]
  let boxFiveRowTwo = [ boardArray[4][3], boardArray[4][4], boardArray[4][5] ]
  let boxFiveRowThree = [ boardArray[5][3], boardArray[5][4], boardArray[5][5] ]
  let wholeBoxFive = boxFiveRowOne.concat(boxFiveRowTwo).concat(boxFiveRowThree)
  checkBox(wholeBoxFive)

  let boxSixRowOne = [ boardArray[3][6], boardArray[3][7], boardArray[3][8] ]
  let boxSixRowTwo = [ boardArray[4][6], boardArray[4][7], boardArray[4][8] ]
  let boxSixRowThree = [ boardArray[5][6], boardArray[5][7], boardArray[5][8] ]
  let wholeBoxSix = boxSixRowOne.concat(boxSixRowTwo).concat(boxSixRowThree)
  checkBox(wholeBoxSix)

  //Bottom Box Row
  let boxSevenRowOne = [ boardArray[6][0], boardArray[6][1], boardArray[6][2] ]
  let boxSevenRowTwo = [ boardArray[7][0], boardArray[7][1], boardArray[7][2] ]
  let boxSevenRowThree = [ boardArray[8][0], boardArray[8][1], boardArray[8][2] ]
  let wholeBoxSeven = boxSevenRowOne.concat(boxSevenRowTwo).concat(boxSevenRowThree)
  checkBox(wholeBoxSeven)

  let boxEightRowOne = [ boardArray[6][3], boardArray[6][4], boardArray[6][5] ]
  let boxEightRowTwo = [ boardArray[7][3], boardArray[7][4], boardArray[7][5] ]
  let boxEightRowThree = [ boardArray[8][3], boardArray[8][4], boardArray[8][5] ]
  let wholeBoxEight = boxEightRowOne.concat(boxEightRowTwo).concat(boxEightRowThree)
  checkBox(wholeBoxEight)

  let boxNineRowOne = [ boardArray[6][6], boardArray[6][7], boardArray[6][8] ]
  let boxNineRowTwo = [ boardArray[7][6], boardArray[7][7], boardArray[7][8] ]
  let boxNineRowThree = [ boardArray[8][6], boardArray[8][7], boardArray[8][8] ]
  let wholeBoxNine = boxNineRowOne.concat(boxNineRowTwo).concat(boxNineRowThree)
  checkBox(wholeBoxNine)

  console.log(boardArray)
  console.log(boxCheck)



  if (rowCheck || columnCheck || boardCheck || boxCheck) {
    return "ERROR: Bad Board"
  }


};

module.exports = Sudoku;
