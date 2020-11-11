/** 
 * Given a non-negative integer, you could swap two digits at most once to get the maximum valued number. Return the maximum valued number you could get.

Example 1:
Input: 2736
Output: 7236
Explanation: Swap the number 2 and the number 7.
*/

/**
 * @param {number} num
 * @return {number}
 */
var maximumSwap = function(num) {
  var map =new Map();
  var nums = num.toString().split('');
  for(let i=0; i<nums.length; i++)
    map.set(parseInt(nums[i]),i);

  for(let i=0; i<nums.length; i++){
    for(j=9; j>nums[i]; j--){
      if(map.has(j) && map.get(j)>i){
        let index=map.get(j);
        [nums[i], nums[index]] = [nums[index], nums[i]];
        return parseInt(nums.join(''), 10);
      }
    }
  }
return parseInt(nums.join(''), 10)
};