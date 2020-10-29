/** 
 * Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
  var res=[],cur=[];
  findSubsetsUtil(nums, cur, 0);
  return res;
  
  function findSubsetsUtil(nums, cur, index){
      res.push([...cur]);
      for(let i=index; i<nums.length; i++){
          cur.push(nums[i]);
          findSubsetsUtil(nums, cur, i+1);
          cur.pop();
      }
  }
  
};