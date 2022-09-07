/**
  You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

Return the length of the longest substring containing the same letter you can get after performing the above operations.

 

Example 1:

Input: s = "ABAB", k = 2
Output: 4
Explanation: Replace the two 'A's with two 'B's or vice versa.
Example 2:

Input: s = "AABABBA", k = 1
Output: 4
Explanation: Replace the one 'A' in the middle with 'B' and form "AABBBBA".
The substring "BBBB" has the longest repeating letters, which is 4.
*/

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
	let max = 0;
	let left = 0;
	let windowSize = 0;
	let maxCharacter = 0;
	let count = new Array(26).fill(0);
	for (let right = 0; right < s.length; right++) {
		let c = s.charAt(right);
		windowSize = right - left + 1;
		count[s.charCodeAt(right) - "A".charCodeAt(0)]++;
		maxCharacter = Math.max(
			maxCharacter,
			count[s.charCodeAt(right) - "A".charCodeAt(0)]
		);
		let replaceNumber = windowSize - maxCharacter;
		if (replaceNumber > k) {
			count[s.charCodeAt(left) - "A".charCodeAt(0)]--;
			left++;
			windowSize = right - left + 1;
		}
		max = Math.max(max, windowSize);
	}
	return max;
};
