/**
 * @param {number} n
 * @returns { }
 */

/* 
used recursion
*/

class Solution {
  printNos(N, i = 1, temp = "") {
    //code here
    if (i <= N) {
      temp += i + " ";
      i++;
      this.printNos(N, i, temp);
    } else {
      console.log(temp);
    }
  }
}
