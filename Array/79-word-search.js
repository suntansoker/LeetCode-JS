/** 
 * Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Example 1:

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  var rows=board.length, cols = board[0].length;
  var found=new Array(rows).fill(false).map(_ => new Array(cols).fill(false));
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(word[0]===board[i][j] && findWordUtil(i,j,0)===true)
        return true;
    }
  }
  return false;
  
  function findWordUtil(row, col, index){
    if(index===word.length)
      return true;
    if(row<0 || row>=rows || col<0 || col>=cols || found[row][col] || word[index]!==board[row][col])
      return false;
    found[row][col]=true;
    if(findWordUtil(row+1, col, index+1) ||
      findWordUtil(row, col+1, index+1) ||
      findWordUtil(row-1, col, index+1) ||
      findWordUtil(row, col-1, index+1))
      return true;
    found[row][col]=false;
    return false;
  }
};