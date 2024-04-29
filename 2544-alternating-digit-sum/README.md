## [2544. Alternating Digit Sum](https://leetcode.com/problems/alternating-digit-sum)

<code>Easy</code> <code>Math</code>

<br>

You are given a positive integer <code>n</code>. Each digit of <code>n</code> has a sign according to the following rules:

- The __most significant digit__ is assigned a __positive__ sign.
- Each other digit has an opposite sign to its adjacent digits.

Return *the sum of all digits with their corresponding sign*.

<br>

Example 1:

> __Input:__ n = 521
> 
> __Output:__ 4
> 
> __Explanation:__ (+5) + (-2) + (+1) = 4.

Example 2:

> __Input:__ n = 111
> 
> __Output:__ 1
> 
> __Explanation:__ (+1) + (-1) + (+1) = 1.

Example 3:

> __Input:__ n = 886996
> 
> __Output:__ 0
> 
> __Explanation:__ (+8) + (-8) + (+6) + (-9) + (+9) + (-6) = 0.

<br>

Constraints:

-<code> 1 <= n <= 10<sup>9</sup></code>
