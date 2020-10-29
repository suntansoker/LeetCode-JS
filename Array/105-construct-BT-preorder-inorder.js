/** 
 * Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  var preIndex=0;
  let map = new Map();
  let n=preorder.length;
  createMap(n, inorder);
  return constructTree(preorder, inorder, 0, n-1)
  
  function createMap(n, inorder){
    for(let i=0; i<inorder.length; i++){
      map.set(inorder[i], i);
    }
  }
  
  function constructTree(preorder, inorder, start, end){
    if(start>end)
      return null;
    var node = new TreeNode(preorder[preIndex++]);
    let index = map.get(node.val);
    node.left = constructTree(preorder, inorder, start, index-1);
    node.right = constructTree(preorder, inorder, index+1, end);
    return node;
  }
};