/** 
 * Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

Example 1:

Input: height = [0,1,0,2,1,0,1,3,2,1,2,1]
Output: 6
Explanation: The above elevation map (black section) is represented by array [0,1,0,2,1,0,1,3,2,1,2,1]. In this case, 6 units of rain water (blue section) are being trapped.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  var maxFromLeft=Array(height.length).fill(0);
  let maxLeft=0,maxRight=0,res=0;
  var maxFromRight=Array(height.length).fill(0);
  for(let i=0; i<height.length; i++){
    if(height[i]<maxLeft)
      maxFromLeft[i]=maxLeft-height[i];
    else
      maxLeft=height[i];
  }
  for(let i=height.length-1; i>=0; i--){
    if(height[i]<maxRight)
      maxFromRight[i]=maxRight-height[i];
    else
      maxRight=height[i];
  }
  for(let i=0; i<height.length; i++)
    res+=Math.min(maxFromLeft[i], maxFromRight[i]);
  
  return res;
};