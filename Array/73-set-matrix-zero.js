/** 
 * Given an m x n matrix. If an element is 0, set its entire row and column to 0. Do it in-place.

Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?

Example 1:
Input: matrix = [[1,1,1],[1,0,1],[1,1,1]]
Output: [[1,0,1],[0,0,0],[1,0,1]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  var colZero=false, rowZero=false;  
  for(let j=0; j<matrix[0].length; j++){
      if(matrix[0][j]===0){
        rowZero=true;
        break;
      }
    }
  for(let i=0; i<matrix.length; i++){
      if(matrix[i][0]===0){
        colZero=true;
        break;
      }
    }
  for(let i=1; i<matrix.length; i++){
    for(let j=1; j<matrix[0].length; j++){
      if(matrix[i][j]===0){
        matrix[i][0]=0;
        matrix[0][j]=0;
      }
    }
  }
  for(let i=1; i<matrix.length; i++){
    if(matrix[i][0]===0){
      for(j=0; j<matrix[0].length; j++)
        matrix[i][j]=0;
    }
  }
  for(let j=1; j<matrix[0].length; j++){
    if(matrix[0][j]===0){
      for(i=0; i<matrix.length; i++)
        matrix[i][j]=0;
    }
  }
  if(matrix[0][0]===0){
    rowZero=true;
    colZero=true;
  }
  if(rowZero){
    for(let j=0; j<matrix[0].length; j++)
      matrix[0][j]=0;
  }
  if(colZero){
    for(let i=0; i<matrix.length; i++)
      matrix[i][0]=0;
  }
};