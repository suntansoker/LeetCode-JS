/** 
 * Given a string s consisting only of characters a, b and c.

Return the number of substrings containing at least one occurrence of all these characters a, b and c.

 

Example 1:

Input: s = "abcabc"
Output: 10
Explanation: The substrings containing at least one occurrence of the characters a, b and c are "abc", "abca", "abcab", "abcabc", "bca", "bcab", "bcabc", "cab", "cabc" and "abc" (again). 
*/

/**
 * @param {string} s
 * @return {number}
 */
var numberOfSubstrings = function(s) {
  if(s.length <3)
      return 0;
     var j=0,arr=new Array(3).fill(0),res=0;
     for(let i=0; i<s.length; i++){
         arr[s.charCodeAt(i)-97]++;
         while(j<i && arr[0]>0 && arr[1]>0 && arr[2]>0){
             arr[s.charCodeAt(j)-97]--;
             j++;
         }
         res+=j;
     }
     return res;
 };