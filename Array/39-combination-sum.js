/** 
 * Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.

 

Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
  var res=[], cur=[], sum=target;
  findCombinationSum(candidates, cur, 0, sum);
  return res;
  
  function findCombinationSum(candidates, cur, index, sum){
      if(sum===0){
          res.push([...cur]);
          return;
      }
      if(sum < 0){
          return;
      }
      for(let i=index; i<candidates.length; i++){
          cur.push(candidates[i]);
          findCombinationSum(candidates, cur, i, sum-candidates[i]);
          cur.pop();
      }
  }
};