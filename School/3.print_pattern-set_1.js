//User function Template for javascript

/**
 * @param {number} n
 */

/* 
----------------- following formulation explains the approch ----------------- 
n{
   n{ 
        nx(n), nx(n-1), nx(n-2), nx(n-3), ............... nx(n-(n-1))
    }
   (n-1){ 
        nx(n), nx(n-1), nx(n-2), nx(n-3), ............... nx(n-(n-1))
    }
   (n-2){ 
        nx(n), nx(n-1), nx(n-2), nx(n-3), ............... nx(n-(n-1))
    }
    .
    .
    .
    .
    .
    .
    (n-n){ 
         nx(n), nx(n-1), nx(n-2), nx(n-3), ............... nx(n-(n-1))
     }
}


*/
class Solution {
  printPat(n) {
    //code here
    //Your code here
    let temp = "";
    let t = n;
    for (let i = 0; i < n; i++) {
      for (let j = n; j > 0; j--) {
        for (let k = 0; k < t; k++) {
          temp += j + " ";
        }
      }
      temp += "$";
      t--;
    }
    console.log(temp);
    // return temp ;
  }
}
