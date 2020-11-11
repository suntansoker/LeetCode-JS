/** 
 * Given a collection of intervals, merge all overlapping intervals.

Example 1:

Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].
*/

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
  var res=[];
  if(intervals.length === 0)
    return res;
  intervals.sort((a,b) => a[0] - b[0]);
  res.push(intervals[0]);
  for(let i=1;i<intervals.length;i++){
    var left, right;
    [left, right] = intervals[i];
    let maxLeft = Math.max(left, res[res.length-1][0]);
    let minRight = Math.min(right, res[res.length-1][1]);
    if(maxLeft<=minRight){
      let resLeft, resRight;
      [resLeft, resRight] = res.pop();
      left = Math.min(left, resLeft);
      right = Math.max(right, resRight);
    }
    res.push([left,right]);
  }
  return res;
};