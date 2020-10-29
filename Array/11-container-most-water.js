/** 
 * Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
 * 
 * Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
*/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let maxArea=0, left=0, right=height.length-1;
  while(left<right){
      let area = (right-left)*Math.min(height[left], height[right]);
      maxArea = Math.max(maxArea, area);
      if(height[left] <= height[right]){
          left++;
      }else{
          right--;
      }
  }
  return maxArea;
};