/**
 Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: s = "cbaebabacd", p = "abc"
Output: [0,6]
Explanation:
The substring with start index = 0 is "cba", which is an anagram of "abc".
The substring with start index = 6 is "bac", which is an anagram of "abc".
Example 2:

Input: s = "abab", p = "ab"
Output: [0,1,2]
Explanation:
The substring with start index = 0 is "ab", which is an anagram of "ab".
The substring with start index = 1 is "ba", which is an anagram of "ab".
The substring with start index = 2 is "ab", which is an anagram of "ab".
 */

/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
	let left = 0,
		right = 0,
		ans = [];
	let sFreq = new Array(26).fill(0);
	let pFreq = new Array(26).fill(0);

	for (let i = 0; i < p.length; i++) {
		pFreq[p.charCodeAt(i) - "a".charCodeAt(0)]++;
	}

	while (right < s.length) {
		while (right < s.length && right - left < p.length) {
			sFreq[s.charCodeAt(right) - "a".charCodeAt(0)]++;
			right++;
		}

		let anagramTrue = true;
		for (let idx = 0; idx < 26; idx++) {
			if (sFreq[idx] != pFreq[idx]) {
				anagramTrue = false;
				break;
			}
		}

		if (anagramTrue) ans.push(left);
		sFreq[s.charCodeAt(left) - "a".charCodeAt(0)]--;

		left++;
	}

	return ans;
};
