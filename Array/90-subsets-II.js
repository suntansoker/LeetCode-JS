/** 
 * Given a collection of integers that might contain duplicates, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: [1,2,2]
Output:
[
  [2],
  [1],
  [1,2,2],
  [2,2],
  [1,2],
  []
]
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function(nums) {
  var res=[],cur=[];
  nums.sort((a,b) => a-b);
  return subsetsWithDupUtil(nums, cur, 0);

  function subsetsWithDupUtil(nums, cur, index){
    res.push([...cur]);
    
    if(index>=nums.length)
      return;
    
    let prev=-Infinity;
    for(let i=index; i<nums.length; i++){
      if(nums[i]!==prev){
        cur.push(nums[i]);
        subsetsWithDupUtil(nums, cur, i+1);
        cur.pop();
        prev=nums[i];
      }
    }
    return res;
  }

};