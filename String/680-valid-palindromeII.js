/**
 Given a string s, return true if the s can be palindrome after deleting at most one character from it.
Example 1:

Input: s = "aba"
Output: true
Example 2:

Input: s = "abca"
Output: true
Explanation: You could delete the character 'c'.
Example 3:

Input: s = "abc"
Output: false
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkPalindrome = function (str, i, j) {
	while (i < j) {
		if (str[i] !== str[j]) return false;
		i++;
		j--;
	}
	return true;
};

var validPalindrome = function (s) {
	for (let i = 0, j = s.length - 1; i < j; i++, j--) {
		if (s[i] !== s[j]) {
			return checkPalindrome(s, i + 1, j) || checkPalindrome(s, i, j - 1);
		}
	}
	return true;
};
