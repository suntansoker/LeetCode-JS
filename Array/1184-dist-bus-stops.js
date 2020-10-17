/** 
 * A bus has n stops numbered from 0 to n - 1 that form a circle. We know the distance between all pairs of neighboring stops where distance[i] is the distance between the stops number i and (i + 1) % n.

The bus goes along both directions i.e. clockwise and counterclockwise.

Return the shortest distance between the given start and destination stops.

Input: distance = [1,2,3,4], start = 0, destination = 1
Output: 1
Explanation: Distance between 0 and 1 is 1 or 9, minimum is 1.
*/

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function(distance, start, destination) {
  let sum_1 = 0, sum_2 = 0;
  if(start>destination){
      [start, destination] = [destination, start];
  }
  let i=start;
  while(i<destination){
      sum_1+=distance[i];
      i++;
  }
  i=start-1;
  while(i>=0){
      sum_2+=distance[i];
      i--;
  }
  i=destination;
  while(i<=distance.length-1){
      sum_2+=distance[i];
      i++;
  }
  if(sum_1<sum_2){
      return sum_1;
  }else{
      return sum_2;
  }
};