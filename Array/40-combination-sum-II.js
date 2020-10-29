/** 
 * Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

Each number in candidates may only be used once in the combination.

Note: The solution set must not contain duplicate combinations.

 

Example 1:

Input: candidates = [10,1,2,7,6,1,5], target = 8
Output: 
[
[1,1,6],
[1,2,5],
[1,7],
[2,6]
]
*/

/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  let cur=[],res=[];
  candidates.sort((a,b) => a-b);
  findSumUtil(candidates, cur, 0, target);
  return res;
  
  function findSumUtil(candidates, cur, index, sum){
    if(sum===0){
      res.push([...cur]);
      return;
    }
    if(sum<0 || index>=candidates.length)
      return;
    let prev=-1;
    for(let i=index; i<candidates.length; i++){
      if(candidates[i]!==prev){
        cur.push(candidates[i]);
        findSumUtil(candidates, cur, i+1, sum-candidates[i]);
        cur.pop();
        prev=candidates[i];
      }
      
    }
    
    return;
  }
};