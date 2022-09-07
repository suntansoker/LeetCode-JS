/**
Given a string s and an integer k, return the length of the longest substring of s such that the frequency of each character in this substring is greater than or equal to k.

Example 1:

Input: s = "aaabb", k = 3
Output: 3
Explanation: The longest substring is "aaa", as 'a' is repeated 3 times.
Example 2:

Input: s = "ababbc", k = 2
Output: 5
Explanation: The longest substring is "ababb", as 'a' is repeated 2 times and 'b' is repeated 3 times.
 */

// Brute force

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
	if (s == null || s.length == 0 || k > s.length) return 0;
	let countMap = new Array(26).fill(0);
	let n = s.length;
	let ans = 0;
	for (let start = 0; start < n; start++) {
		countMap.fill(0);
		for (let end = start; end < n; end++) {
			countMap[s.charCodeAt(end) - "a".charCodeAt(0)]++;
			if (findPresence(k, countMap)) {
				ans = Math.max(ans, end - start + 1);
			}
		}
	}
	return ans;
};

var findPresence = function (k, countMap) {
	let count = 0,
		countMinK = 0;
	for (let i = 0; i < 26; i++) {
		if (countMap[i] > 0) count++;
		if (countMap[i] >= k) countMinK++;
	}

	return count === countMinK;
};

//Divide & conquer
var longestSubstring = function (s, k) {
	let n = s.length;
	return findLongestUtil(s, 0, n, k);
};

var findLongestUtil = function (s, start, end, k) {
	if (end < k) return 0;
	let countMap = new Array(26).fill(0);
	for (let i = start; i < end; i++) {
		countMap[s.charCodeAt(i) - "a".charCodeAt(0)]++;
	}
	for (let mid = start; mid < end; mid++) {
		if (countMap[s.charCodeAt(mid) - "a".charCodeAt(0)] >= k) continue;
		let midNext = mid + 1;
		while (
			midNext < end &&
			countMap[s.charCodeAt(midNext) - "a".charCodeAt(0)] < k
		)
			midNext++;
		return Math.max(
			findLongestUtil(s, start, mid, k),
			findLongestUtil(s, midNext, end, k)
		);
	}

	return end - start;
};

//Sliding window

/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var longestSubstring = function (s, k) {
	let n = s.length;
	let maxUnique = findMax(s);
	let res = 0;
	for (let currentUnique = 1; currentUnique <= maxUnique; currentUnique++) {
		let countMap = new Array(26).fill(0);
		let windowStart = 0,
			windowEnd = 0,
			idx = 0,
			unique = 0,
			countK = 0;
		while (windowEnd < n) {
			if (unique <= currentUnique) {
				idx = s.charCodeAt(windowEnd) - "a".charCodeAt(0);
				if (countMap[idx] == 0) unique++;
				countMap[idx]++;
				if (countMap[idx] == k) countK++;
				windowEnd++;
			} else {
				idx = s.charCodeAt(windowStart) - "a".charCodeAt(0);
				if (countMap[idx] == k) countK--;
				countMap[idx]--;
				if (countMap[idx] == 0) unique--;
				windowStart++;
			}
			if (unique == currentUnique && unique == countK)
				res = Math.max(res, windowEnd - windowStart);
		}
	}
	return res;
};

var findMax = function (s) {
	let found = new Array(26).fill(false);
	let maxUnique = 0;
	for (let idx = 0; idx < s.length; idx++) {
		if (!found[s.charCodeAt(idx) - "a".charCodeAt(0)]) {
			maxUnique++;
			found[s.charCodeAt(idx) - "a".charCodeAt(0)]++;
		}
	}
	return maxUnique;
};
