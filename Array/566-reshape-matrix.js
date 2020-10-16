/**
 * In MATLAB, there is a very useful function called 'reshape', which can reshape a matrix into a new one with different size but keep its original data.

You're given a matrix represented by a two-dimensional array, and two positive integers r and c representing the row number and column number of the wanted reshaped matrix, respectively.

The reshaped matrix need to be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the 'reshape' operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

Example 1:
Input: 
nums = 
[[1,2],
 [3,4]]
r = 1, c = 4
Output: 
[[1,2,3,4]]
Explanation:
The row-traversing of nums is [1,2,3,4]. The new reshaped matrix is a 1 * 4 matrix, fill it row by row by using the previous list.
 */

 /**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
  let arr=[];
  let rows=nums.length;
  let cols = nums[0].length;
  if(rows*cols !== r*c){
      return nums;
  }
  let res=new Array(r).fill(0).map(_ => new Array(c).fill(0));
  for(let i=0;i<rows; i++){
      for(let j=0; j<cols;j++){
          arr.push(nums[i][j]);
      }
  }
  
  for(let i=r-1; i>=0; i--){
      for(let j=c-1; j>=0; j--){
          res[i][j]=arr.pop();
      }
  }
  return res;
};