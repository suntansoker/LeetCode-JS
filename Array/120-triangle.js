/** 
 * Given a triangle, find the minimum path sum from top to bottom. Each step you may move to adjacent numbers on the row below.

For example, given the following triangle

[
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]
The minimum path sum from top to bottom is 11 (i.e., 2 + 3 + 5 + 1 = 11).
*/

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function(triangle) {
  var rows = triangle.length;
  var cols = triangle[rows-1].length;
  var dp=new Array(cols+1).fill(0);
  for(let i=rows-1; i>=0; i--){
    for(let j=0; j<=i; j++){
      dp[j]=Math.min(dp[j],dp[j+1])+triangle[i][j];
    }
  }
return dp[0];
};