/**
 Given two strings s and goal, return true if you can swap two letters in s so the result is equal to goal, otherwise, return false.

Swapping letters is defined as taking two indices i and j (0-indexed) such that i != j and swapping the characters at s[i] and s[j].

For example, swapping at indices 0 and 2 in "abcd" results in "cbad".
 

Example 1:

Input: s = "ab", goal = "ba"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'b' to get "ba", which is equal to goal.
Example 2:

Input: s = "ab", goal = "ab"
Output: false
Explanation: The only letters you can swap are s[0] = 'a' and s[1] = 'b', which results in "ba" != goal.
Example 3:

Input: s = "aa", goal = "aa"
Output: true
Explanation: You can swap s[0] = 'a' and s[1] = 'a' to get "aa", which is equal to goal.
 */

/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
var buddyStrings = function (s, goal) {
	if (s.length !== goal.length) return false;
	if (s === goal) {
		var count = new Array(26).fill(0);
		for (let i = 0; i < s.length; i++) {
			count[s[i].charCodeAt(0) - "a".charCodeAt(0)]++;
		}
		var flag = 0;
		for (let i = 0; i < count.length; i++) {
			if (count[i] > 1) return true;
		}
		return false;
	} else {
		let first = -1,
			second = -1;
		for (let i = 0; i < s.length; i++) {
			if (s[i] !== goal[i]) {
				if (first === -1) first = i;
				else if (second === -1) second = i;
				else return false;
			}
		}
		return (
			second !== -1 && s[first] === goal[second] && s[second] === goal[first]
		);
	}
};
