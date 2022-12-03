/**
 * @param {number} n
 * @returns { }
 */

/* 
used recursion
1.initialise 'temp' as empty and initialize a  variable 'i' from 1
2.each time increment 'i' by '+1'
3.add 'i' to temp till 'i' is less than 'N'
4.end print temp
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
