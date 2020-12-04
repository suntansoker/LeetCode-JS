/** 
 * Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:

Input: "hello"
Output: "holle"
Example 2:

Input: "leetcode"
Output: "leotcede"
Note:
The vowels does not include the letter "y".
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var str= s.split('');
  let arr=[];
  let set = new Set(['a','A','e','E','i','I','o','O','u','U']);
  for(let i=0; i<s.length; i++){
      if(set.has(str[i])){
          arr.push(str[i]);
      }
  }
  arr.reverse();
  var j=0;
  for(let i=0; i<s.length; i++){
       if(set.has(str[i])){
          str[i]=arr[j];
          j++;
      }
  }
  
  return str.join('');
};