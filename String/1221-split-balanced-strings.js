/** 
 * Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
*/

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
  var res=0, count=0;
   for(let i=0; i<s.length; i++){
       if(s[i] === 'L')
           count++;
       if(s[i] === 'R')
           count--;
       if(count===0)
           res++;
   }
   return res;
};