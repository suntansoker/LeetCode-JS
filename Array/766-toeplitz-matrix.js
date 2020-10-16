/**
 * A matrix is Toeplitz if every diagonal from top-left to bottom-right has the same element.

Now given an M x N matrix, return True if and only if the matrix is Toeplitz.
 

Example 1:

Input:
matrix = [
  [1,2,3,4],
  [5,1,2,3],
  [9,5,1,2]
]
Output: True
Explanation:
In the above grid, the diagonals are:
"[9]", "[5, 5]", "[1, 1, 1]", "[2, 2, 2]", "[3, 3]", "[4]".
In each diagonal all elements are the same, so the answer is True.
Example 2:

Input:
matrix = [
  [1,2],
  [2,2]
]
Output: False
Explanation:
The diagonal "[1, 2]" has different elements.
 */

/**
 * @param {number[][]} matrix
 * @return {boolean}
 */
var isToeplitzMatrix = function(matrix) {
  let rows=matrix.length;
  let cols=matrix[0].length;
  for(let i=0;i<cols;i++){
      let j=1, k=i+1;
      while(j<rows && k<cols){
          if(matrix[j][k]===matrix[0][i]){
              j++; k++;
              continue;
          }else{
              return false;
          }
      }
  }
  
  for(let i=1;i<rows;i++){
      let j=i+1, k=1;
      while(j<rows && k<cols){
          if(matrix[j][k]===matrix[i][0]){
              j++; k++;
              continue;
          }else{
              return false;
          }
      }
  }
  
  return true;
};