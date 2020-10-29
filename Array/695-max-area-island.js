/** 
 * Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
  var r = grid.length;
  var c = grid[0].length;
  var count=0,max=0;
  
  for(let i =0; i<r; i++){
      for(let j=0; j<c; j++){
          findMaxArea(i,j);
          max=Math.max(count,max);
          count=0;
      }
  }
  
  return max;
  
  function findMaxArea(i,j){
      if(i<0 || i>=r || j<0 || j>=c || grid[i][j]===0){
          return;
      }
      count++;
      grid[i][j]=0;
      
      findMaxArea(i+1,j);
      findMaxArea(i,j+1);
      findMaxArea(i-1,j);
      findMaxArea(i,j-1);
  }
};