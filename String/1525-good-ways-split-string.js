/** 
 * You are given a string s, a split is called good if you can split s into 2 non-empty strings p and q where its concatenation is equal to s and the number of distinct letters in p and q are the same.

Return the number of good splits you can make in s.

 

Example 1:

Input: s = "aacaba"
Output: 2
Explanation: There are 5 ways to split "aacaba" and 2 of them are good. 
("a", "acaba") Left string and right string contains 1 and 3 different letters respectively.
("aa", "caba") Left string and right string contains 1 and 3 different letters respectively.
("aac", "aba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aaca", "ba") Left string and right string contains 2 and 2 different letters respectively (good split).
("aacab", "a") Left string and right string contains 3 and 1 different letters respectively.
*/

/**
 * @param {string} s
 * @return {number}
 */
var numSplits = function(s) {
  var set= new Set();
  let n=s.length;
  let arrLeft=new Array(n).fill(0);
  let arrRight = new Array(n).fill(0);
  
  for(let i=0; i<n; i++){
      set.add(s[i]);
      arrLeft[i] = set.size;
  }
  
  set.clear();
  for(let i=n-1; i>=0; i--){
      set.add(s[i]);
      arrRight[i] = set.size;
  }
  let count=0;
  for(let i=0; i<n-1; i++){
      if(arrLeft[i]===arrRight[i+1])
          count++;
  }
  
  return count;
  
};