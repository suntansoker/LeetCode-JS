/** 
 * Given an array of integers nums and an integer k, return the number of unique k-diff pairs in the array.

A k-diff pair is an integer pair (nums[i], nums[j]), where the following are true:

0 <= i, j < nums.length
i != j
|nums[i] - nums[j]| == k
Notice that |val| denotes the absolute value of val.

Example 1:

Input: nums = [3,1,4,1,5], k = 2
Output: 2
Explanation: There are two 2-diff pairs in the array, (1, 3) and (3, 5).
Although we have two 1s in the input, we should only return the number of unique pairs.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
  nums.sort((a,b) => a-b);
  var set= new Set();
  var count=0, found=0;
  set.add(nums[0]);
  for(let i=1; i<nums.length; i++){
    if(!set.has(nums[i])){
      found=0
      if(set.has(nums[i]-k))
        count++;
      set.add(nums[i]);
    }else{
      if(set.has(nums[i]-k)){
        found++;
        if(k===0 && found===1)
          count++;
        else
          continue;
      }
    }
  }
  return count;
};