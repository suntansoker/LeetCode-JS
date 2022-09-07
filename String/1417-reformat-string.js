/**
You are given an alphanumeric string s. (Alphanumeric string is a string consisting of lowercase English letters and digits).

You have to find a permutation of the string where no letter is followed by another letter and no digit is followed by another digit. That is, no two adjacent characters have the same type.

Return the reformatted string or return an empty string if it is impossible to reformat the string.

 

Example 1:

Input: s = "a0b1c2"
Output: "0a1b2c"
Explanation: No two adjacent characters have the same type in "0a1b2c". "a0b1c2", "0a1b2c", "0c2a1b" are also valid permutations.

 */

var reformat = function (s) {
	const chars = [],
		nums = [];
	let res = "";
	for (let i = 0; i < s.length; i++) {
		if (isNaN(+s[i])) {
			chars.push(s[i]);
		} else {
			nums.push(s[i]);
		}
	}
	if (Math.abs(chars.length - nums.length) > 1) return "";
	let longer = chars.length >= nums.length ? chars : nums;
	let shorter = chars.length < nums.length ? chars : nums;
	while (shorter.length) {
		res += longer.pop();
		res += shorter.pop();
	}
	if (longer.length) res += longer.pop();
	return res;
};
