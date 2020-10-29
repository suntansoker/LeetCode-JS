/** 
 * You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.

Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
Output: [[7,4,1],[8,5,2],[9,6,3]]
*/

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  let n=matrix.length;
  var r1=0,c1=0,r2=n-1,c2=n-1;
  
  while(r1<Math.floor(n/2)){
      for(let i=0; c1+i<c2; i++){
          let element = matrix[r1][c1+i];
          matrix[r1][c1+i] = matrix[r2-i][c1];
          matrix[r2-i][c1] = matrix[r2][c2-i];
          matrix[r2][c2-i] = matrix[r1+i][c2];
          matrix[r1+i][c2] = element;
      }
      r1++;
      r2--;
      c1++;
      c2--;
  }
  
  return matrix;
};