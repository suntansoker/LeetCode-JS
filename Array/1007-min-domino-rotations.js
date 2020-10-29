/** 
 * In a row of dominoes, A[i] and B[i] represent the top and bottom halves of the ith domino.  (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)

We may rotate the ith domino, so that A[i] and B[i] swap values.

Return the minimum number of rotations so that all the values in A are the same, or all the values in B are the same.

If it cannot be done, return -1.

Input: A = [2,1,2,4,2,2], B = [5,2,6,2,3,2]
Output: 2
Explanation: 
The first figure represents the dominoes as given by A and B: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.
*/

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number}
 */
var minDominoRotations = function(A, B) {
  var a=findRotations(A[0],A,B);
  var b=findRotations(B[0],A,B);
    
    if(a===-1)
        return b;
    if(b===-1)
        return a;
    return Math.min(a,b);
  
  function findRotations(val, arr1, arr2){
     let first=0, second=0;
     for(let i=0; i<arr1.length; i++){
         if(arr1[i]!==val && arr2[i]!==val)
             return -1;
         if(arr1[i]!==val)
             second++;
         if(arr2[i]!==val)
             first++;
     }
      return Math.min(first,second);
  }
};