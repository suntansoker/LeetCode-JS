/** 
 * Given a rows * columns matrix mat of ones and zeros, return how many submatrices have all ones.
 * 
Example 1:

Input: mat = [[1,0,1],
              [1,1,0],
              [1,1,0]]
Output: 13
Explanation:
There are 6 rectangles of side 1x1.
There are 2 rectangles of side 1x2.
There are 3 rectangles of side 2x1.
There is 1 rectangle of side 2x2. 
There is 1 rectangle of side 3x1.
Total number of rectangles = 6 + 2 + 3 + 1 + 1 = 13.
*/

/**
 * @param {number[][]} mat
 * @return {number}
 */
var numSubmat = function(mat) {
  let rows=mat.length, cols= mat[0].length,count=0;
    
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++){
      if(mat[i][j] > 0){
        if(i>0)
          mat[i][j] += mat[i-1][j];
        count+=mat[i][j];
        let minRowAndWholeMatrix = mat[i][j];
        let k=j-1;
        while(k>=0 && mat[i][j]>0){
          minRowAndWholeMatrix = Math.min(minRowAndWholeMatrix,mat[i][k]);
          count+=minRowAndWholeMatrix;
          k--;
        }
          
      }
    }
  }
  return count;
};