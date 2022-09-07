/**
You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

The valid times are those inclusively between 00:00 and 23:59.

Return the latest valid time you can get from time by replacing the hidden digits.

 

Example 1:

Input: time = "2?:?0"
Output: "23:50"
Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.
Example 2:

Input: time = "0?:3?"
Output: "09:39" 
*/

/**
 * @param {string} time
 * @return {string}
 */
var maximumTime = function (time) {
	let arr = time.split("").filter((x) => x != ":");
	if (arr[0] === "?") {
		if (arr[1] === "?") arr[0] = "2";
		else arr[0] = arr[1] >= 4 ? "1" : "2";
	}
	if (arr[1] === "?") {
		if (arr[0] === "2") arr[1] = "3";
		else arr[1] = "9";
	}
	if (arr[2] === "?") arr[2] = "5";
	if (arr[3] === "?") arr[3] = "9";

	return `${arr[0]}${arr[1]}:${arr[2]}${arr[3]}`;
};
