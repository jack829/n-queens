/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/
// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other

window.findNRooksSolution = function(n) {
  var solution = undefined; //fixme
  var rookBoard = new Board({n:n})
  var plays = rookBoard.rows();
  var row = [];
  var col = [];
  for(var i = 0; i < n; i++){
    for(var y = 0; y < n; y++){
      if(row.indexOf(i) === -1 && col.indexOf(y) === -1){
        row.push(i);
        col.push(y);
        plays[i][y] = 1;
      }
    }
  }
  solution = plays;

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other

window.countNRooksSolutions = function(n) {
  var solutionCount = 0; //fixme 
  var board = new Board({n:n});

  var combos = function(row){
    if(row === n){
      solutionCount ++;

      return;
    }
    for (var i = 0; i < n; i++){
      board.togglePiece(row, i);

      if (!board.hasAnyRooksConflicts()){
        combos(row +1);
      }

      board.togglePiece(row,i);
    }
  };
  combos(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) {
  var solution = []; //fixme
  var board = new Board({n:n});

  if(n===2 || n===3){
    return 0;
  }

  var combos = function(row){
    if(row === n){
      solution.push(board);
      return;
    }

    for(var i = 0; i < n; i++){
      board.togglePiece(row, i);

      if(!board.hasAnyQueensConflicts()){
        combos(row + 1);
      }

      board.togglePiece(row, i);
    };
  };
  combos(0);


  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  if(solution.length === 0){
    return 0;
  } else {
    return solution[0]
  }
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) {

  
  var solutionCount = 0;
  var board = new Board({n:n});

  var combos = function(row){
    if(row === n){
      console.log(solutionCount + '  -  ' + JSON.stringify(board))
      solutionCount ++;
      return;
    }

    for(var i = 0; i < n; i++){
      board.togglePiece(row, i);

      if(!board.hasAnyQueensConflicts()){
        combos(row + 1);
      }

      board.togglePiece(row, i);
    };
  };
  combos(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};












