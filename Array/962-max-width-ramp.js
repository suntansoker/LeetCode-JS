/** 
 * Given an array A of integers, a ramp is a tuple (i, j) for which i < j and A[i] <= A[j].  The width of such a ramp is j - i.

Find the maximum width of a ramp in A.  If one doesn't exist, return 0.

 

Example 1:

Input: [6,0,8,2,1,5]
Output: 4
Explanation: 
The maximum width ramp is achieved at (i, j) = (1, 5): A[1] = 0 and A[5] = 5.
*/

/**
 * @param {number[]} A
 * @return {number}
 */
var maxWidthRamp = function(A) {
  var arr=[];
  for(let i=0; i<A.length; i++){
    if(arr.length===0 || A[i] < A[arr[arr.length-1]])
      arr.push(i);
  }
  
  var res=0;
  for(let i=A.length-1; i>=0; i--){
    while(arr.length!==0 && A[i] >= A[arr[arr.length-1]]){
      let ele = arr.pop();
      res=Math.max(res, i-ele);
    }
  }
  return res;
};