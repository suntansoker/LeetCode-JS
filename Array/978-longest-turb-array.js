/** 
 * A subarray A[i], A[i+1], ..., A[j] of A is said to be turbulent if and only if:

For i <= k < j, A[k] > A[k+1] when k is odd, and A[k] < A[k+1] when k is even;
OR, for i <= k < j, A[k] > A[k+1] when k is even, and A[k] < A[k+1] when k is odd.
That is, the subarray is turbulent if the comparison sign flips between each adjacent pair of elements in the subarray.

Return the length of a maximum size turbulent subarray of A.

 

Example 1:

Input: [9,4,2,10,7,8,8,1,9]
Output: 5
Explanation: (A[1] > A[2] < A[3] > A[4] < A[5])
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxTurbulenceSize = function(A) {
  var count=1,dir=0;
  var max=1;
  for(let i=0; i<A.length-1; i++){
    if(A[i]<A[i+1]){
      if(dir===-1 || dir===0){
        count++;
        max=Math.max(max, count);
        console.log(i+'=>'+count);
      }else{
        count=2;
      }
       dir=1;
    }else if(A[i]>A[i+1]){
      if(dir===1 || dir===0){
        count++;
        max=Math.max(max,count);
        console.log(i+'=>'+count);
      }else{
        count=2;
      }
      dir=-1;
    }else{
      dir=0;
      count=1;
      continue;
    }
  }
  return max;
};