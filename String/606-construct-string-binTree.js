/**
 Given the root of a binary tree, construct a string consisting of parenthesis and integers from a binary tree with the preorder traversal way, and return it.

Omit all the empty parenthesis pairs that do not affect the one-to-one mapping relationship between the string and the original binary tree.

Input: root = [1,2,3,4]
Output: "1(2(4))(3)"
Explanation: Originally, it needs to be "1(2(4)())(3()())", but you need to omit all the unnecessary empty parenthesis pairs. And it will be "1(2(4))(3)"
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string}
 */
var tree2str = function (root) {
	if (!root) return "";
	let res = "" + root.val;
	if (root.left && root.right) {
		res += "(" + tree2str(root.left) + ")(" + tree2str(root.right) + ")";
	} else if (root.left) {
		res += "(" + tree2str(root.left) + ")";
	} else if (root.right) {
		res += "()(" + tree2str(root.right) + ")";
	}
	return res;
};
