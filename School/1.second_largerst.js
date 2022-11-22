// --------- approch ---------------
/*

---------- first approch ---------------

 1.find the largest in first iteration
 2.iterate again 
 -->take another vatiable as temp
 --> if current no. is smaller than largest than  store it in a variable
 --> also if the current vatiable is greater than temp  and smaller 
     than greatest no replace the temp with it
     
     **-> we need to check it should be smaller than greatest so that it
          do not take repeated no. equal to greatest no.


t(c) -> O(n)
s(c) -> 1

--------- second ------------
   sort 
   --> iterate from last take different (not equal to last) value from last   
   
   --> check if first and last are equal or not 
       --> if equal return -1
       --> else iterate and check different from last

t(c) -> nlogn
s(c) -> n or 1



------- third -----------------
// if first value is the laregst it will be a problem
// to avoid this we need to set a min value and not the first index value
// l=l2=[0] --> an issue   
l=l2= -1  
iterate from index 0 to n
if(l<[i])
    l2=l
    l=[i]
else if([i]>l2 && [i]<l)    // -->need to check [i]<l bcz they may be equal also
    l2=[i]

 */

/**
 * @param {number[]} arr
 * @param {number} n
 * @returns {number}
 */

class Solution {
  print2largest(arr, n) {
    //code here
    let temp = arr[0];

    for (let i = 1; i < n; i++) {
      if (arr[i] > temp) temp = arr[i];
    }

    let small2 = -1;
    for (let i = 0; i < n; i++) {
      if (small2 < arr[i] && arr[i] < temp) small2 = arr[i];
    }
    return small2;
  }
}
