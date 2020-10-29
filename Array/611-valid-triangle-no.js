/** 
 * Given an array consists of non-negative integers, your task is to count the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.
Example 1:
Input: [2,2,3,4]
Output: 3
Explanation:
Valid combinations are: 
2,3,4 (using the first 2)
2,3,4 (using the second 2)
2,2,3
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var triangleNumber = function(nums) {
  let count=0;
  nums.sort((a,b) => a-b);
  
  for(let i=0; i<nums.length-2; i++){
    let k=i+2;
    for(let j=i+1; j<nums.length-1 && nums[i]!=0; j++){
      while(k<nums.length && nums[i]+nums[j]>nums[k])
        k++;
      count+=k-j-1;
    }
  }
  return count;
};