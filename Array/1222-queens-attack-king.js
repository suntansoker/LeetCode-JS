/** 
 * On an 8x8 chessboard, there can be multiple Black Queens and one White King.

Given an array of integer coordinates queens that represents the positions of the Black Queens, and a pair of coordinates king that represent the position of the White King, return the coordinates of all the queens (in any order) that can attack the King.
Input: queens = [[0,1],[1,0],[4,0],[0,4],[3,3],[2,4]], king = [0,0]
Output: [[0,1],[1,0],[3,3]]
*/

/**
 * @param {number[][]} queens
 * @param {number[]} king
 * @return {number[][]}
 */
var queensAttacktheKing = function(queens, king) {
  var qPos = new Set(queens.map(q => q.toString()));
  var res=[];
  for(var i=-1; i<=1; i++){
      for(var j=-1; j<=1; j++){
          for(var k=1; k<=8; k++){
              var x=[king[0] + i*k, king[1] + j*k];
              if(qPos.has([x[0],x[1]].toString())){
                  res.push([x[0],x[1]]);
                  break;
              }
          }
      }
  }
  return res;
};