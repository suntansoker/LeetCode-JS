/**
 * Given an array of distinct integers arr, find all pairs of elements with the minimum absolute difference of any two elements. 

Return a list of pairs in ascending order(with respect to pairs), each pair [a, b] follows

a, b are from arr
a < b
b - a equals to the minimum absolute difference of any two elements in arr
 

Example 1:

Input: arr = [4,2,1,3]
Output: [[1,2],[2,3],[3,4]]
Explanation: The minimum absolute difference is 1. List all pairs with difference equal to 1 in ascending order.
Example 2:

Input: arr = [1,3,6,10,15]
Output: [[1,3]]
Example 3:

Input: arr = [3,8,-10,23,19,-4,-14,27]
Output: [[-14,-10],[19,23],[23,27]]
 */

/**
 * @param {number[]} A
 * @return {number[][]}
 */
var minimumAbsDifference = function(A) {
  A.sort((a,b) => a-b);
  let min=Infinity;
  let res=[];
  for(let i=0;i<A.length-1;i++){
      if(A[i+1]-A[i] < min){
          min=A[i+1]-A[i];
      }
  }
  for(let i=0;i<A.length-1;i++){
      if(A[i+1]-A[i]===min){
          res.push([A[i],A[i+1]]);
      }
  }
  return res;
};