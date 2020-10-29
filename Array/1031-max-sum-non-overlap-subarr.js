/** 
 * Given an array A of non-negative integers, return the maximum sum of elements in two non-overlapping (contiguous) subarrays, which have lengths L and M.  (For clarification, the L-length subarray could occur before or after the M-length subarray.)

Formally, return the largest V for which V = (A[i] + A[i+1] + ... + A[i+L-1]) + (A[j] + A[j+1] + ... + A[j+M-1]) and either:

0 <= i < i + L - 1 < j < j + M - 1 < A.length, or
0 <= j < j + M - 1 < i < i + L - 1 < A.length.
 

Example 1:

Input: A = [0,6,5,2,2,5,1,9,4], L = 1, M = 2
Output: 20
Explanation: One choice of subarrays is [9] with length 1, and [6,5] with length 2.
*/

/**
 * @param {number[]} A
 * @param {number} L
 * @param {number} M
 * @return {number}
 */
var maxSumTwoNoOverlap = function(A, L, M) {
  for(let i=1; i<A.length; i++){
      A[i]+=A[i-1];
  }
  
  var res=0;
  
  let left_M_Max = 0;
  for(let l=0; l+L-1<A.length; l++){
      let r=l+L-1;
      if(l<M) continue;
      let sum = l-M-1<0 ? A[l-1] : A[l-1] - A[l-M-1];
      left_M_Max = Math.max(left_M_Max, sum);
      let lCur = A[r]-A[l-1];
      res = Math.max(res, lCur+left_M_Max);
  }
  console.log(res);
  
  let right_M_Max = 0,n=A.length, sum=0;
  
  for(let r=n-1; r-L+1>=0; r--){
      let l=r-L;
      if(r>n-M-1) continue;
      sum = A[r+M] - A[r];
      console.log(r , sum);
      right_M_Max = Math.max(right_M_Max, sum);
      let rCur = l>=0 ? A[r]-A[l]: A[r];
      res = Math.max(res, rCur+right_M_Max);
  }
  return res;
};