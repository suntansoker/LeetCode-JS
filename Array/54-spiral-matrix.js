/** 
 * Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
*/

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
  var res=[];
  if(matrix.length ===0)
    return res;
  var topRow=0, leftCol=0, rightCol=matrix[0].length-1, bottomRow=matrix.length-1;
  while(true){
    for(let j=leftCol; j<=rightCol; j++)
      res.push(matrix[topRow][j]);
    topRow++;
    if(topRow>bottomRow)
      break;
    
    for(let i=topRow; i<=bottomRow; i++)
      res.push(matrix[i][rightCol]);
    rightCol--;
    if(leftCol>rightCol)
      break;
    
    for(let j=rightCol; j>=leftCol; j--)
      res.push(matrix[bottomRow][j]);
    bottomRow--;
    if(topRow>bottomRow)
      break;
    
    for(let i=bottomRow; i>=topRow; i--)
      res.push(matrix[i][leftCol]);
    leftCol++;
    if(leftCol>rightCol)
      break;
  }
  return res;
};