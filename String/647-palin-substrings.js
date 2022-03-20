/** 
 * Given a string, your task is to count how many palindromic substrings in this string.

The substrings with different start indexes or end indexes are counted as different substrings even they consist of same characters.

Example 1:

Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".
 

Example 2:

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
*/

/**
 * @param {string} s
 * @return {number}
 */
var countSubstrings = function(s) {
  let n=s.length;
  
  if(n<=0)
      return 0;
  let ans = 0;
  let dp=new Array(n).fill(false).map(m => new Array(n).fill(false));
  for(let i=0; i<n;i++){
      dp[i][i]=true;
      ans++;
  }
      

  for(let i=0; i<n-1; i++){
      if(s[i] === s[i+1]){
         dp[i][i+1] = true;
         ans++; 
          console.log(ans);
      }
  }
      
  for(let interval=3; interval<=n; interval++){
      for(let i=0, j=i+interval-1; j<n; i++,j++){
          dp[i][j] = (dp[i+1][j-1]===true && s[i] === s[j])?true:false;
          ans += (dp[i][j]===true ? 1: 0);
          // console.log(ans);
      }
  }
  
  return ans;
  
};