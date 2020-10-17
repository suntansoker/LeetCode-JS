/** 
 * Given an array A of integers, return true if and only if we can partition the array into three non-empty parts with equal sums.

Formally, we can partition the array if we can find indexes i+1 < j with (A[0] + A[1] + ... + A[i] == A[i+1] + A[i+2] + ... + A[j-1] == A[j] + A[j-1] + ... + A[A.length - 1])

 

Example 1:

Input: A = [0,2,1,-6,6,-7,9,1,2,0,1]
Output: true
Explanation: 0 + 2 + 1 = -6 + 6 - 7 + 9 + 1 = 2 + 0 + 1
Example 2:

Input: A = [0,2,1,-6,6,7,9,-1,2,0,1]
Output: false
Example 3:

Input: A = [3,3,6,5,-2,2,5,1,-9,4]
Output: true
Explanation: 3 + 3 = 6 = 5 - 2 + 2 + 5 + 1 - 9 + 4
*/

/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function(A) {
  const sum = A.reduce((a,b) => a+b,0);
  if(sum %3 !==0) return false;
  let each = sum/3;
  let count =0;
  let sub_sum=0;
  for(let i=0; i<A.length; i++){
      sub_sum += A[i];
      if(sub_sum === each){
          count++;
          console.log("Sum:",sub_sum);
          console.log("Count:",count);
          sub_sum=0;
          
      }
      else{
          continue;
      }
  }
  //Cosider the case where the sum or sub_sum is 0, any no of o-tuples can be
  //merged with any of the parts, in that case count%3===0 doesnt matter
  return (!each && count>=3) || (count && count%3===0) ? true : false;
};