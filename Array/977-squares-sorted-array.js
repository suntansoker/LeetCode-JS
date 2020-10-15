/**
 * Given an array of integers A sorted in non-decreasing order, return an array of the squares of each number, also in sorted non-decreasing order.

 

Example 1:

Input: [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Example 2:

Input: [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 */

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortedSquares = function(A) {
  // return A.map(a => a*a).sort((a,b) => a-b);
  var newArr=new Array(A.length);
  var j=1, i=0;
  while(j<A.length && A[j]<0){
      j++;
  }
  
  
  i=j-1;
  var k=0;
  while(i>=0 && j<A.length){
      if(A[i]*A[i] < A[j]*A[j]){
          newArr[k++]=A[i]*A[i];
          i--;
      }
      else{
          newArr[k++]=A[j]*A[j];
          j++;
      }
  }
  while(i>=0){
      newArr[k++]=A[i]*A[i];
      i--;
  }
  while(j<A.length){
      newArr[k++]=A[j]*A[j];
      j++;
  }
  return newArr;
};