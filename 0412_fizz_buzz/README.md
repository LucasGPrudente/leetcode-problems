## [412. Fizz Buzz](https://leetcode.com/problems/fizz-buzz/)

<code>Easy</code>

<br>

Given an integer <code>n</code>, return a string array <code>answer</code> __(1-indexed)__ where:

- <code>answer[i] == "FizzBuzz"</code> if <code>i</code> is divisible by <code>3</code> and <code>5</code>.
- <code>answer[i] == "Fizz"</code> if <code>i</code> is divisible by <code>3</code>.
- <code>answer[i] == "Buzz"</code> if <code>i</code> is divisible by <code>5</code>.
- <code>answer[i] == i</code> (as a string) if none of the above conditions are true.

<br>

Example 1:

> __Input:__ n = 3
> __Output:__ ["1","2","Fizz"]

Example 2:

> __Input:__ n = 5
> __Output:__ ["1","2","Fizz","4","Buzz"]

Example 3:

> __Input:__ n = 15
> __Output:__ ["1","2","Fizz","4","Buzz","Fizz","7","8","Fizz","Buzz","11","Fizz","13","14","FizzBuzz"]

<br>

Constraints:

- <code>1 <= n <= 10<sup>4</sup></code>
