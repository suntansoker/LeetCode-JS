/** 
 * Given an array of integers nums sorted in ascending order, find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

Follow up: Could you write an algorithm with O(log n) runtime complexity?

 

Example 1:

Input: nums = [5,7,7,8,8,10], target = 8
Output: [3,4]
*/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
  var left=-1, right=-1;
  left = findLeftIndex(0, nums.length-1);
  right = findRightIndex(0, nums.length-1);
  return [left,right];
  
  function findLeftIndex(left,right){
    if(left>right)
      return -1;
    let mid = left + Math.floor((right-left)/2);
    if(nums[mid] === target){
      let index = findLeftIndex(left,mid-1);
      if(index!==-1)
        return index;
      else
        return mid;
    }
      
    else if(nums[mid] > target)
      return findLeftIndex(left, mid-1);
    else
      return findLeftIndex(mid+1, right);
  }
  
  function findRightIndex(left, right){
    if(left>right)
      return -1;
    let mid = left + Math.floor((right-left)/2);
    if(nums[mid] === target){
      let index = findRightIndex(mid+1,right);
      if(index!==-1)
        return index;
      else
        return mid;
    }
    else if(nums[mid] > target)
      return findRightIndex(left, mid-1);
    else
      return findRightIndex(mid+1, right);
  }
};