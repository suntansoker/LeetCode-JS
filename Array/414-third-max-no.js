/** 
 * Given a non-empty array of integers, return the third maximum number in this array. If it does not exist, return the maximum number. The time complexity must be in O(n).

Example 1:
Input: [3, 2, 1]

Output: 1

Explanation: The third maximum is 1.
Example 2:
Input: [1, 2]

Output: 2

Explanation: The third maximum does not exist, so the maximum (2) is returned instead.
Example 3:
Input: [2, 2, 3, 1]

Output: 1

Explanation: Note that the third maximum here means the third maximum distinct number.
Both numbers with value 2 are both considered as second maximum.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
  let first = -Infinity, second = -Infinity, third = -Infinity;
  for(let i = 0; i<nums.length; i++){
      if(nums[i]>first){
          third = second;
          second = first;
          first=nums[i];
      }else if(nums[i]!==first && nums[i]>second){
          third = second;
          second = nums[i];
      }else if(nums[i]!==first && nums[i]!=second && nums[i]<second 
               && nums[i]>third){
          third = nums[i];
      }else{
          continue;
      }
  }
  return third!==-Infinity ? third : first;
};