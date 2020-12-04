/** 
 * Given an array arr of positive integers, consider all binary trees such that:

Each node has either 0 or 2 children;
The values of arr correspond to the values of each leaf in an in-order traversal of the tree.  (Recall that a node is a leaf if and only if it has 0 children.)
The value of each non-leaf node is equal to the product of the largest leaf value in its left and right subtree respectively.
Among all possible binary trees considered, return the smallest possible sum of the values of each non-leaf node.  It is guaranteed this sum fits into a 32-bit integer.

Example 1:

Input: arr = [6,2,4]
Output: 32
Explanation:
There are two possible trees.  The first has non-leaf node sum 36, and the second has non-leaf node sum 32.

    24            24
   /  \          /  \
  12   4        6    8
 /  \               / \
6    2             2   4
*/

/**
 * @param {number[]} arr
 * @return {number}
 */
var mctFromLeafValues = function(arr) {
  
  var dp=new Array(arr.length).fill(0).map(_ => new Array(arr.length).fill(0));
  for(let i=arr.length-2; i>=0; i--){
    for(j=i+1; j<arr.length; j++){
      let min=Infinity
      for(let k=i; k<j; k++){
        let leftMax = -Infinity,rightMax=-Infinity;
        for(let l=i; l<=k; l++)
          leftMax = Math.max(leftMax, arr[l]);
        for(let r=j; r>k; r--)
          rightMax = Math.max(rightMax, arr[r]);
        let value = leftMax * rightMax + dp[i][k] + dp[k+1][j];
        min=Math.min(min, value);
      }
      console.log(`i & j: ${i} ${j}`);
      console.log(min);
      dp[i][j] = min;
    }
  }
  return dp[0][arr.length-1];
};