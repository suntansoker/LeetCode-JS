/**
Given a string s which represents an expression, evaluate this expression and return its value. 

The integer division should truncate toward zero.

You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().

Example 1:

Input: s = "3+2*2"
Output: 7
Example 2:

Input: s = " 3/2 "
Output: 1
 */

/**
 * @param {string} s
 * @return {number}
 */
var calculate = function (s) {
	let stack = [];
	let last_operator = "+";
	let currentNo = 0;
	let ans = 0;
	for (let i = 0; i <= s.length; i++) {
		const c = s[i];
		if (i == s.length || is_operator(c)) {
			if (last_operator == "+") stack.push(currentNo);
			else if (last_operator == "-") stack.push(-1 * currentNo);
			else if (last_operator == "*") {
				let prevNo = stack.pop();
				stack.push(prevNo * currentNo);
			} else if (last_operator == "/") {
				let prevNo = stack.pop();
				stack.push(Math.trunc(prevNo / currentNo));
			}
			currentNo = 0;
			last_operator = c;
		} else if (is_digit(c)) {
			currentNo = currentNo * 10 + parseInt(c);
		}
	}
	while (stack.length > 0) ans += stack.pop();

	return ans;
};

var is_operator = function (c) {
	return c === "+" || c === "-" || c === "*" || c === "/";
};

var is_digit = function (c) {
	return c >= "0" && c <= "9";
};
