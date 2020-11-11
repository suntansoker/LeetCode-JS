/** 
 * Given an array of integers nums and an integer k, return the total number of continuous subarrays whose sum equals to k.

Example 1:

Input: nums = [1,1,1], k = 2
Output: 2
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function(nums, k) {
  let map = new Map();
  for(let i=1; i<nums.length; i++){
    nums[i]=nums[i]+nums[i-1];
  }

  map.set(0,1);
  var count=0;
  for(let i=0; i<nums.length; i++){
    if(map.has(nums[i]-k)){
      count += map.get(nums[i]-k);
    }
    if(map.get(nums[i])===undefined)
      map.set(nums[i],1)
    else
      map.set(nums[i],map.get(nums[i])+1);
  }
return count;
};