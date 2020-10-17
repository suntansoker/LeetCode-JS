/** 
 * In a deck of cards, each card has an integer written on it.

Return true if and only if you can choose X >= 2 such that it is possible to split the entire deck into 1 or more groups of cards, where:

Each group has exactly X cards.
All the cards in each group have the same integer.
 

Example 1:

Input: deck = [1,2,3,4,4,3,2,1]
Output: true
Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
Example 2:

Input: deck = [1,1,1,2,2,2,3,3]
Output: false´
Explanation: No possible partition.
Example 3:

Input: deck = [1]
Output: false
Explanation: No possible partition.
Example 4:

Input: deck = [1,1]
Output: true
Explanation: Possible partition [1,1].
Example 5:

Input: deck = [1,1,2,2,2,2]
Output: true
Explanation: Possible partition [1,1],[2,2],[2,2].
*/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var findGCD = function(num1,num2){
  if(num2===1){
      return num2
  }
  if(num2===0){
      return num1;
  }
  return findGCD(num2, num1%num2);
}

var hasGroupsSizeX = function(deck) {
  let map= new Map();
  let min=Infinity;
  for(let i=0;i<deck.length;i++){
      let val=map.get(deck[i]);
      if(!val){
          map.set(deck[i],1);
      }else{
          map.set(deck[i],val+1);
      }
  }
  
  let arr=[];
  for(let value of map.values()){
      arr.push(value);
  }
  let gcd = arr[0];
  for(let i=1; i<arr.length; i++){
      gcd = findGCD(arr[i],gcd);
      if(gcd<2){
          break;
      }
  }
  return (gcd < 2) ? false: true;
};