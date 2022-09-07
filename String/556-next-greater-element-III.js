/**
 Given a positive integer n, find the smallest integer which has exactly the same digits existing in the integer n and is greater in value than n. If no such positive integer exists, return -1.

Note that the returned integer should fit in 32-bit integer, if there is a valid answer but it does not fit in 32-bit integer, return -1.

 

Example 1:

Input: n = 12
Output: 21
Example 2:

Input: n = 21
Output: -1
 */

/**
 * @param {number} s
 * @return {number}
 */
var nextGreaterElement = function (s) {
	let n = s.toString().split("");
	let i = n.length - 1;
	let ans = -1;
	while (i >= 0) {
		if (i + 1 < n.length && n[i] < n[i + 1]) {
			let min = Number.MAX_VALUE,
				index = 0;
			for (let k = i + 1; k < n.length; k++) {
				if (n[k] < min && n[k] > n[i]) {
					min = n[k];
					index = k;
				}
			}
			let temp = n[i];
			n[i] = min;
			n[index] = temp;
			let firstPart = n.slice(0, i + 1);
			let secondPart = n.slice(i + 1);

			console.log(firstPart);
			secondPart.sort((a, b) => a - b);

			ans = [...firstPart, ...secondPart];
			ans = Number(ans.join(""));
			break;
		}
		i--;
	}
	if (i == -1) return -1;

	if (ans > Math.pow(2, 31) - 1) return -1;

	return ans;
};
