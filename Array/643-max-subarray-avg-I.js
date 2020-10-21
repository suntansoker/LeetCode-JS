/** 
 * Given an array consisting of n integers, find the contiguous subarray of given length k that has the maximum average value. And you need to output the maximum average value.

Example 1:

Input: [1,12,-5,-6,50,3], k = 4
Output: 12.75
Explanation: Maximum average is (12-5-6+50)/4 = 51/4 = 12.75
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
  let maxAvg=-Infinity;
  let sum=0;
  for(let i=0; i<nums.length; i++){
      sum += nums[i];
      if(i===k-1){
          maxAvg = Math.max(sum/k.toFixed(2), maxAvg);
      }else if(i>=k){
          sum-=nums[i-k];
          maxAvg = Math.max(sum/k.toFixed(2), maxAvg);
      }
      else{
          continue;
      }
  }
  return maxAvg;
};