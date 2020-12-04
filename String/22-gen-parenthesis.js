/** 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
Example 1:

Input: n = 3
Output: ["((()))","(()())","(())()","()(())","()()()"]
Example 2:

Input: n = 1
Output: ["()"]
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
  var res=[];
  findParenthesisUtil("",0,0,n);
  return res;
  
  function findParenthesisUtil(str, open, close, total){
      if(str.length === 2* total){
          res.push(str);
          return;
      }
      if(open<total)
          findParenthesisUtil(str+'(' , open+1, close, total);
      if(close<open)
          findParenthesisUtil(str+')' , open, close+1, total);
  }
};