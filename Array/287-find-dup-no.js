/** 
 * Given an array of integers nums containing n + 1 integers where each integer is in the range [1, n] inclusive.

There is only one duplicate number in nums, return this duplicate number.

Follow-ups:

How can we prove that at least one duplicate number must exist in nums? 
Can you solve the problem without modifying the array nums?
Can you solve the problem using only constant, O(1) extra space?
Can you solve the problem with runtime complexity less than O(n2)?
 

Example 1:

Input: nums = [1,3,4,2,2]
Output: 2
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function(nums) {
  for(let i=0; i<nums.length; i++){
      let index = Math.abs(nums[i])-1;
      if(nums[index] < 0){
          return Math.abs(nums[i]);
      }else{
          nums[index] = -nums[index];
      }
  }
  return -1;
};