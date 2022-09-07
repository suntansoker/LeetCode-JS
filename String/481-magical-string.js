/**
 A magical string s consists of only '1' and '2' and obeys the following rules:

The string s is magical because concatenating the number of contiguous occurrences of characters '1' and '2' generates the string s itself.
The first few elements of s is s = "1221121221221121122……". If we group the consecutive 1's and 2's in s, it will be "1 22 11 2 1 22 1 22 11 2 11 22 ......" and the occurrences of 1's or 2's in each group are "1 2 2 1 1 2 1 2 2 1 2 2 ......". You can see that the occurrence sequence is s itself.

Given an integer n, return the number of 1's in the first n number in the magical string s.

 

Example 1:

Input: n = 6
Output: 3
Explanation: The first 6 elements of magical string s is "122112" and it contains three 1's, so return 3.
Example 2:

Input: n = 1
Output: 1
 */

/**
 * @param {number} n
 * @return {number}
 */
var magicalString = function (n) {
	if (n == 1) return 1;
	let arr = new Array(n + 2).fill(0);
	arr[0] = 1;
	arr[1] = 2;
	let i = 1,
		j = 1;
	while (j < n) {
		if (arr[i] == 2 && arr[j - 1] == 2) {
			arr[j++] = 1;
			arr[j++] = 1;
		} else if (arr[i] == 2 && arr[j - 1] == 1) {
			arr[j++] = 2;
			arr[j++] = 2;
		} else if (arr[i] == 1 && arr[j - 1] == 2) {
			arr[j++] = 1;
		} else {
			arr[j++] = 2;
		}
		i++;
	}
	let ans = 0;
	for (let i = 0; i < n; i++) {
		ans += 2 - arr[i];
	}

	return ans;
};
