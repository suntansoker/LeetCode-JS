/** 
 * Given an integer n, return the number of strings of length n that consist only of vowels (a, e, i, o, u) and are lexicographically sorted.

A string s is lexicographically sorted if for all valid i, s[i] is the same as or comes before s[i+1] in the alphabet.

Example 1:

Input: n = 1
Output: 5
Explanation: The 5 sorted strings that consist of vowels only are ["a","e","i","o","u"].
Example 2:

Input: n = 2
Output: 15
Explanation: The 15 sorted strings that consist of vowels only are
["aa","ae","ai","ao","au","ee","ei","eo","eu","ii","io","iu","oo","ou","uu"].
Note that "ea" is not a valid string since 'e' comes after 'a' in the alphabet.
*/

/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  let arr=[1,1,1,1,1];
  let res=0;
  for(let i=2; i<=n; i++){
    for(let j=4; j>0; j--){
      let k=j-1;
      while(k>=0){
        arr[j]=arr[j]+arr[k];
        k--;
      }
        
    }
  }
  for(let i=0; i<5; i++)
    res+=arr[i];
  
  return res;
};