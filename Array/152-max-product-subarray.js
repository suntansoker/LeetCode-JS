/** 
 * Given an integer array nums, find the contiguous subarray within an array (containing at least one number) which has the largest product.

Example 1:

Input: [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function(nums) {
   //  O(n) SPACE
//   var max=new Array(nums.length).fill(0), min=new Array(nums.length).fill(0), res=-Infinity;
//   max[0]=nums[0];
//   min[0]=nums[0];
  
//   res=max[0];
  
//   for(let i=1; i<nums.length; i++){
//     if(nums[i]>0){
//       max[i]=Math.max(nums[i], nums[i]*max[i-1]);
//       min[i]=Math.min(nums[i], nums[i]*min[i-1]);
//     }else{
//       max[i]=Math.max(nums[i], nums[i]*min[i-1]);
//       min[i]=Math.min(nums[i], nums[i]*max[i-1]);
//     }
//     console.log("Max:",max[i]);
//     console.log("Min:",min[i]);
//     console.log("===========");
//     res=Math.max(res, max[i]);
//   }
  
//   return res;
 
  
  /** O(1) SPACE */
  let max=nums[0], min=nums[0];
  var res=max;
  for(let i=1; i<nums.length; i++){
    if(nums[i]>0){
      max=Math.max(nums[i], nums[i]*max);
      min=Math.min(nums[i], nums[i]*min);
    }
    else{
      let temp=max;
      max=Math.max(nums[i], nums[i]*min);
      min=Math.min(nums[i], nums[i]*temp);
    }
    res=Math.max(res, max);
  }
  return res;
};