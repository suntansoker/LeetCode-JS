/** 
 * Given an integer array of size n, find all elements that appear more than ⌊ n/3 ⌋ times.

Follow-up: Could you solve the problem in linear time and in O(1) space?

Example 1:

Input: nums = [3,2,3]
Output: [3]
Example 2:

Input: nums = [1]
Output: [1]
Example 3:

Input: nums = [1,2]
Output: [1,2]
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {
  var x=[Infinity,0], y=[Infinity,0];
  for(let i=0; i<nums.length; i++){
    if(x[0] === nums[i]){
      x[1]++;
    }else if(y[0] === nums[i]){
      y[1]++;
    }else if(x[1]===0){
      x[0]=nums[i];
      x[1]=1;
    }else if(y[1]===0){
      y[0]=nums[i];
      y[1]=1;
    }else{
      x[1]--;
      y[1]--;
    }
  }

  console.log(x[0], y[0]);
  var res=[];
  let count1=0, count2=0;
  for(let i=0; i<nums.length; i++){
    if(nums[i] === x[0] && x[1]>0)
      count1++;
    if(nums[i] === y[0] && y[1]>0)
      count2++;
    }
    if(count1 > Math.floor(nums.length/3))
      res.push(x[0]);
    if(count2 > Math.floor(nums.length/3))
      res.push(y[0]);
  
  return res;
};