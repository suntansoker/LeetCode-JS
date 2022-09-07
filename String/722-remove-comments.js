/**
Given a C++ program, remove comments from it. The program source is an array of strings source where source[i] is the ith line of the source code. This represents the result of splitting the original source code string by the newline character '\n'.
*/

/**
 * @param {string[]} source
 * @return {string[]}
 */
var removeComments = function (source) {
	let res = [];
	let buffer = [];
	let inBlock = false;

	for (let line = 0; line < source.length; line++) {
		for (let ch = 0; ch < source[line].length; ch++) {
			let charAndNext = source[line][ch] + source[line][ch + 1];
			if (inBlock) {
				if (charAndNext == "*/") {
					inBlock = false;
					ch++;
				}
				continue;
			}
			if (charAndNext == "/*") {
				inBlock = true;
				ch++;
				continue;
			}
			if (charAndNext == "//") {
				break;
			}

			buffer.push(source[line][ch]);
		}

		if (!inBlock && buffer.length > 0) {
			res.push(buffer.join(""));
			buffer = [];
		}
	}

	return res;
};
