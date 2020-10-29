/** 
 * Find all valid combinations of k numbers that sum up to n such that the following conditions are true:

Only numbers 1 through 9 are used.
Each number is used at most once.
Return a list of all possible valid combinations. The list must not contain the same combination twice, and the combinations may be returned in any order.

 

Example 1:

Input: k = 3, n = 7
Output: [[1,2,4]]
Explanation:
1 + 2 + 4 = 7
There are no other valid combinations.
*/

/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {
  var res=[], cur=[],count=0, value=1;
  findCombinationSumUtil(cur,count,value,n);
  return res;
  
  function findCombinationSumUtil(cur, count, value, sum){
      if(sum === 0 && count===k){
          res.push([...cur]);
          // console.log(cur);
          return;
      }
      if(sum<0 || count>k)
          return;
      while(value<=9){
          cur.push(value);
          console.log(cur);
          findCombinationSumUtil(cur, count+1, value+1, sum-value);
          cur.pop();
          console.log(cur);
          value++;
      }
  }
  
};