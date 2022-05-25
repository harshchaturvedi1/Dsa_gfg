## Question 1 [5 Marks]

What is the time complexity of fun()?

```
int fun(int n)

{

int count = 0;

for (int i = 0; i < n; i++)

     for (int j = i; j > 0; j--)

        count = count + 1;

return count;

}
```

- Explanation
  The time complexity can be calculated by counting number of times the expression "count = count + 1;" is executed. The expression is executed 0 + 1 + 2 + 3 + 4 + .... + (n-1) times.

Time complexity = Theta(0 + 1 + 2 + 3 + .. + n-1) = Theta (n\*(n-1)/2) = Theta(n2)

## Question 2 [5 Marks]

Let w(n) and A(n) denote respectively, the worst case and average case running time of an algorithm executed on an input of size n. which of the following is ALWAYS TRUE? (GATE CS 2012)

- (A) A(n) = Omega(W(n))
- (B) A(n)=Theta(W(n))
- (C) A(n)=O(W(n))
- (D) A(n) = o(W(n))
  Explanation
  The worst case time complexity is always greater than or same as the average case time complexity.

## Question 3 [5 Marks]

Which of the following is not O(n^2)?

- A (15^10) \_ n + 12099
- B n^1.98
- C n^3 / (sqrt(n))
- D (2^20) \_ n

Explanation
The order of growth of option c is n2.5 which is higher than n2.

## Question 4 [5 Marks]

Which of the given options provides the increasing order of asymptotic complexity of functions f1, f2, f3 and f4?

```
f1(n) = 2^n

f2(n) = n^(3/2)

f3(n) = nLogn

f4(n) = n^(Logn)
```

- A f3, f2, f4, f1
- B f3, f2, f1, f4
- C f2, f3, f1, f4
- D f2, f3, f4, f1
  Explanation

```
f1(n) = 2^n

f2(n) = n^(3/2)

f3(n) = nLogn

f4(n) = n^(Logn)
```

Except f3, all other are exponential. So f3 is definitely first in output. Among remaining, n^(3/2) is next.

One way to compare f1 and f4 is to take Log of both functions. Order of growth of Log(f1(n)) is Θ(n) and order of growth of Log(f4(n)) is Θ(Logn _ Logn). Since Θ(n) has higher growth than Θ(Logn _ Logn), f1(n) grows faster than f4(n).

Following is another way to compare f1 and f4.
Let us compare f4 and f1. Let us take few values to compare

```
n = 32, f1 = 2^32, f4 = 32^5 = 2^25

n = 64, f1 = 2^64, f4 = 64^6 = 2^36
```

...............
Also see http://www.wolframalpha.com/input/?i=2^n+vs+n^%28log+n%29

## Question 5 [5 Marks]

Consider the following program fragment for reversing the digits in a given integer to obtain a new integer. Let n = D1D2…Dm

```
int n, rev;

rev = 0;

while (n > 0)

{

rev = rev\*10 + n%10;

n = n/10;

}
```

The loop invariant condition at the end of the ith iteration is: (GATE CS 2004)

- A n = D1D2….Dm-i and rev = DmDm-1…Dm-i+1
- B n = Dm-i+1…Dm-1Dm and rev = Dm-1….D2D1
- C n != rev
- D n = D1D2….Dm and rev = DmDm-1…D2D1
  Explanation
  We can get it by taking an example like n = 54321. After 2 iterations, rev would be 12 and n would be 543.

## Question 6 [5 Marks]

Consider the following function

```
int unknown(int n) {
int i, j, k = 0;
for (i = n/2; i <= n; i++)
for (j = 2; j <= n; j = j * 2)
k = k + n/2;
return k;
}
```

What is the return value of the function? (GATE CS 2013)

```
(A) Theta(n^2)
(B) Theta (n^2 Logn)
(C) Theta(n^3)
(D) Theta(n^3Logn)
```

- A A
- B B
- C C
- D D
  Explanation
  In the below explanation, '^' is used to represent exponent:
  The outer loop runs n/2 or Theta(n) times.
  The inner loop runs (Logn) times (Note that j is multiplied by 2 in every iteration).
  So the statement "k = k + n/2;" runs Theta(nLogn) times.
  The statement increases value of k by n/2.
  So the value of k becomes n/2\*Theta(nLogn) which is Theta((n^2) \* Logn).

## Question 7 [5 Marks]

The recurrence equation

```
T(1) = 1
T(n) = 2T(n - 1) + n, n ≥ 2
evaluates to
a. 2^n + 1- n - 2
b. 2^n - n
c. 2^n + 1 - 2n - 2
d. 2^n + n
```

- A a
- B b
- C c
- D d
