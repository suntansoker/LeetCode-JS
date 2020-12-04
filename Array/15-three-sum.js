/** 
 * Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

Notice that the solution set must not contain duplicate triplets.

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
*/

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  let j,k,sum=0;
  let res=[];
  nums.sort((a,b) => a-b);
  for(let i=0; i<nums.length-2; i++){
    if(i===0 || nums[i]!==nums[i-1]){
      j=i+1;
      let found=Infinity;
      k=nums.length-1;
      sum=-nums[i];
      while(j<k){
        if(nums[j]+nums[k]===sum){
          if(nums[j]!==found)
            res.push([nums[i],nums[j],nums[k]]);
          found=nums[j]
          j++;
          k--;
        }
        else if(nums[j]+nums[k]>sum)
          k--;
        else
          j++;
      }
    }
  }
  return res;
};