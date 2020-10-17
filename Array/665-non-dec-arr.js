/** 
 * Given an array nums with n integers, your task is to check if it could become non-decreasing by modifying at most 1 element.

We define an array is non-decreasing if nums[i] <= nums[i + 1] holds for every i (0-based) such that (0 <= i <= n - 2).

 

Example 1:

Input: nums = [4,2,3]
Output: true
Explanation: You could modify the first 4 to 1 to get a non-decreasing array.
Example 2:

Input: nums = [4,2,1]
Output: false
Explanation: You can't get a non-decreasing array by modify at most one element.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
  //Brute force
  // for(let i=0; i<nums.length; i++){
  //     let value = nums[i];
  //     let bool=true;
  //     if(i==0){
  //         nums[i]=-Infinity;
  //     }
  //     if(i>0){
  //         nums[i]=nums[i-1];
  //     }
  //     for(let j=0; j<nums.length-1; j++){
  //         if(nums[j]<=nums[j+1]){
  //             continue;
  //         }else{
  //             bool=false;
  //             break;
  //         }
  //     }
  //     if(bool===true){
  //         return true;
  //     }
  //     nums[i]=value;
  // }
  // return false;

  let count=0;
  for(let i=0; i<nums.length; i++){
      if(nums[i]>nums[i+1]){
          count++;
          if(i===0){
              nums[i]=nums[i+1];
          }else if(nums[i-1]>nums[i+1]){
              nums[i+1]=nums[i];
          }else{
              nums[i]=nums[i-1];
          }
      }
      if(count>=2){
          return false;
      }
  }
  return true;

};