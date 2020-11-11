/** 
 * Your are given an array of positive integers nums.

Count and print the number of (contiguous) subarrays where the product of all the elements in the subarray is less than k.

Example 1:
Input: nums = [10, 5, 2, 6], k = 100
Output: 8
Explanation: The 8 subarrays that have product less than 100 are: [10], [5], [2], [6], [10, 5], [5, 2], [2, 6], [5, 2, 6].
Note that [10, 5, 2] is not included as the product of 100 is not strictly less than k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var numSubarrayProductLessThanK = function(nums, k) {
  var prod=1, left=0, right=0, ans=0;
  if(k<=1) return 0;
  while(right<nums.length){
    prod *= nums[right];
    while(prod >= k){
      prod /= nums[left];
      left++;
    }
    ans += right-left+1;
    right++;
  }
  return ans;
};