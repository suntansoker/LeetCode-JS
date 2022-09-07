/**
 Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.

Note that the same word in the dictionary may be reused multiple times in the segmentation.

Example 1:

Input: s = "leetcode", wordDict = ["leet","code"]
Output: true
Explanation: Return true because "leetcode" can be segmented as "leet code".
Example 2:

Input: s = "applepenapple", wordDict = ["apple","pen"]
Output: true
Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
Note that you are allowed to reuse a dictionary word.
 */

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function (s, wordDict) {
	let dp = new Array(s.length + 1);
	return findWord(s, wordDict, dp, 0);
};

var findWord = function (s, wordDict, dp, index) {
	if (index === s.length) return true;
	if (dp[index] != null) return dp[index];
	for (let i = index + 1; i <= s.length; i++) {
		if (
			wordDict.indexOf(s.substring(index, i)) != -1 &&
			findWord(s, wordDict, dp, i)
		)
			return (dp[index] = true);
	}
	return (dp[index] = false);
};
