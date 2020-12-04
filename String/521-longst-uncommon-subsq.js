/** 
 * Given two strings a and b, find the length of the longest uncommon subsequence between them.

A subsequence of a string s is a string that can be obtained after deleting any number of characters from s. For example, "abc" is a subsequence of "aebdc" because you can delete the underlined characters in "aebdc" to get "abc". Other subsequences of "aebdc" include "aebdc", "aeb", and "" (empty string).

An uncommon subsequence between two strings is a string that is a subsequence of one but not the other.

Return the length of the longest uncommon subsequence between a and b. If the longest uncommon subsequence doesn't exist, return -1.

 

Example 1:

Input: a = "aba", b = "cdc"
Output: 3
Explanation: One longest uncommon subsequence is "aba" because "aba" is a subsequence of "aba" but not "cdc".
Note that "cdc" is also a longest uncommon subsequence.
*/

/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
  if(a === b)
      return -1;
  else
      return Math.max(a.length, b.length);
  
};