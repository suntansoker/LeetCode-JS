/** 
 * Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. (eg, "ace" is a subsequence of "abcde" while "aec" is not). A common subsequence of two strings is a subsequence that is common to both strings.

If there is no common subsequence, return 0.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.
*/

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
  var dp = new Array(text1.length+1).fill(0)
    .map(_ => new Array(text2.length+1).fill(0));
  for(let i=1; i<=text1.length; i++){
    for(let j=1; j<=text2.length; j++){
      if(text1[i-1] === text2[j-1])
        dp[i][j] = dp[i-1][j-1] +1;
      else
        dp[i][j] = Math.max(dp[i-1][j],dp[i][j-1]);
    }
  }
  return dp[text1.length][text2.length];
};