/** 
 * Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  var postIndex=postorder.length-1;
  let n=inorder.length;
  let map = new Map();
  createMap(n, inorder);
  return constructTree(inorder, postorder, 0, n-1);
  
  function createMap(n, inorder){
    for(let i=0; i<inorder.length; i++)
      map.set(inorder[i],i);
  }
  
  function constructTree(inorder, postorder, start, end){
    if(start>end)
      return null;
    var node = new TreeNode(postorder[postIndex--]);
    var index = map.get(node.val);
    node.right = constructTree(inorder, postorder, index+1, end);
    node.left = constructTree(inorder, postorder, start, index-1);
    return node;
  }
  
};