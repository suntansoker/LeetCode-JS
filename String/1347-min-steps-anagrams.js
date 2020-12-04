/** 
 * Given two equal-size strings s and t. In one step you can choose any character of t and replace it with another character.

Return the minimum number of steps to make t an anagram of s.

An Anagram of a string is a string that contains the same characters with a different (or the same) ordering.

 

Example 1:

Input: s = "bab", t = "aba"
Output: 1
Explanation: Replace the first 'a' in t with b, t = "bba" which is anagram of s.

*/

/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function(s, t) {
  let arr= new Array(26).fill(0);
    for(let i=0; i<s.length; i++)
        arr[s.charCodeAt(i) - 97]++;
    
    for(let i=0; i<t.length; i++)
        arr[t.charCodeAt(i) - 97]--;
    
    let ans=0;
    for(let i=0; i<26; i++){
        if(arr[i] < 0)
            ans += -arr[i];
    }
    
    return ans;
};