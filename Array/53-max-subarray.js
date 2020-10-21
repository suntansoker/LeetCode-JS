/** 
 * Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

 

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [0]
Output: 0
Example 4:

Input: nums = [-1]
Output: -1
Example 5:

Input: nums = [-2147483647]
Output: -2147483647
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
  let maxSum=-Infinity;
  let currentSum = 0;
  let startIndex=0;
  let maxStartIndex = 0
  let maxEndIndex = nums.length - 1;
  for(let i=0;i<nums.length;i++){
      currentSum+=nums[i];
      if(currentSum>maxSum){
          maxSum = currentSum;
          maxEndIndex = i;
          maxStartIndex=startIndex;
      }
      if(currentSum < 0){
          startIndex = i+1;
          currentSum = 0;
      }
  }
  return maxSum;
};
