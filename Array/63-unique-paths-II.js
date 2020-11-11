/** 
 * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and space is marked as 1 and 0 respectively in the grid.

Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right
*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(board) {
  var rows=board.length, cols = board[0].length;
  if(board[0][0]===1 || board[rows-1][cols-1]===1)
    return 0;
  board[0][0]=1;
  for(let i=1; i<rows; i++){
    if(board[i][0]===0 && board[i-1][0]===1)
      board[i][0]=1;
    else
      board[i][0]=0;
  }
  for(let j=1; j<cols; j++){
    if(board[0][j]===0 && board[0][j-1]===1)
      board[0][j]=1;
    else
      board[0][j]=0;
  }
  for(let i=1; i<rows; i++){
    for(let j=1; j<cols; j++){
      if(board[i][j]===1)
        board[i][j]=0;
      else
        board[i][j]=board[i-1][j]+board[i][j-1]
    }
  }
  return board[rows-1][cols-1];
  
};