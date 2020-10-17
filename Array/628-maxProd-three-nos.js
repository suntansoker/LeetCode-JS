/** 
 * Given an integer array, find three numbers whose product is maximum and output the maximum product.

Example 1:

Input: [1,2,3]
Output: 6
 

Example 2:

Input: [1,2,3,4]
Output: 24
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
  nums.sort((a,b) => a-b);
  let length=nums.length;
  let productWithPossibleNegativeNumbers = nums[0]*nums[1]*nums[length-1];
  let productWithLastThreeNumbers = nums[length-3]*nums[length-2]*nums[length-1];
  return productWithPossibleNegativeNumbers>productWithLastThreeNumbers
  ?productWithPossibleNegativeNumbers:productWithLastThreeNumbers;
};