/*
-------------------------- 1 --------------------------
iterate from 1 to n and add to temp

-------------------------- 2 --------------------------
use sum formula
 (n*(n+1))/2
*/
/**
 * @param {number} n
 * @return {integer}
 */
class Solution {
  seriesSum(n) {
    // code here
    let temp = (n * (n + 1)) / 2;
    return temp;
  }
}
