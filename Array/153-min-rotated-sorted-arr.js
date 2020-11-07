/** 
 * Suppose an array sorted in ascending order is rotated at some pivot unknown to you beforehand. (i.e.,  [0,1,2,4,5,6,7] might become  [4,5,6,7,0,1,2]).

Return the minimum element of this array.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
*/
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
  let n=nums.length;
return findMinUtil(nums,0,n-1);

function findMinUtil(nums, left, right){
  let mid = left + Math.floor((right-left)/2);
  if(left === right)
    return nums[mid];
  if(nums[mid]>=nums[left]){
    if(mid < n-1 && nums[mid+1]<nums[mid])
      return nums[mid+1];
    if(nums[mid]<=nums[right])
      return findMinUtil(nums, left, mid);
    else
      return findMinUtil(nums, mid+1, right);
  }else{
    if(mid>0 && nums[mid-1]>nums[mid])
      return nums[mid];
    return findMinUtil(nums, left, mid-1);
  }
}
};