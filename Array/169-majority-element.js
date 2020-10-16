/**
 * Given an array of size n, find the majority element. The majority element is the element that appears more than ⌊ n/2 ⌋ times.

You may assume that the array is non-empty and the majority element always exist in the array.

Example 1:

Input: [3,2,3]
Output: 3
Example 2:

Input: [2,2,1,1,1,2,2]
Output: 2
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  let count=1, majority=nums[0];
  for(let i=1;i<nums.length;i++){
      if(nums[i]==majority){
          count++;
      }else{
          count--;
          if(count===0){
              majority=nums[i];
              count=1;
          }
      }
  }
  return majority;
};