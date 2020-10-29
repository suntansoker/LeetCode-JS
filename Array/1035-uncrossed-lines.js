/** 
 * We write the integers of A and B (in the order they are given) on two separate horizontal lines.

Now, we may draw connecting lines: a straight line connecting two numbers A[i] and B[j] such that:

A[i] == B[j];
The line we draw does not intersect any other connecting (non-horizontal) line.
Note that a connecting lines cannot intersect even at the endpoints: each number can only belong to one connecting line.

Return the maximum number of connecting lines we can draw in this way.

Input: A = [1,4,2], B = [1,2,4]
Output: 2
Explanation: We can draw 2 uncrossed lines as in the diagram.
We cannot draw 3 uncrossed lines, because the line from A[1]=4 to B[2]=4 will intersect the line from A[2]=2 to B[1]=2.
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var maxUncrossedLines = function(A, B) {
  let dp = new Array(A.length+1).fill(0).map(x => new Array(B.length+1).fill(0));
  
  for(let i=1; i<=A.length; i++){
      for(let j=1; j<=B.length; j++){
          if(A[i-1]===B[j-1]){
              dp[i][j] = dp[i-1][j-1] + 1;
          }else{
              dp[i][j] = Math.max(dp[i][j-1], dp[i-1][j])
          }
      }
  }
  return dp[A.length][B.length];
};