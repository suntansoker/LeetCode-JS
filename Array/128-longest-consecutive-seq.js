/** 
 * Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

Follow up: Could you implement the O(n) solution? 

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
  let set= new Set();
  for(let i=0; i<nums.length; i++)
    set.add(nums[i]);
  
  let max=0,count=0;
  
  for(let i=0; i<nums.length; i++){
    count=1;
    if(!set.has(nums[i]-1)){
      let val=nums[i];
      while(set.has(++val)){
        count++;
        max=Math.max(max,count);
      }
    }else
      continue;
  }
  return Math.max(max,count);
};