## [202. Happy Number](https://leetcode.com/problems/happy-number)

<code>Easy</code> <code>Hash Table</code> <code>Math</code> <code>Two Pointers</code>

<br>

Write an algorithm to determine if a number <code>n</code> is happy.

A __happy number__ is a number defined by the following process:

- Starting with any positive integer, replace the number by the sum of the squares of its digits.
- Repeat the process until the number equals 1 (where it will stay), or it __loops endlessly in a cycle__ which does not include 1.
- Those numbers for which this process __ends in 1__ are happy.

Return <code>true</code> *if* <code>n</code> *is a happy number, and* <code>false</code> *if not*.

<br>

#### Example 1:

> __Input:__ n = 19
> 
> __Output:__ true
> 
> __Explanation:__  
> 12 + 92 = 82  
> 82 + 22 = 68  
> 62 + 82 = 100  
> 12 + 02 + 02 = 1  

#### Example 2:

> __Input:__ n = 2
> 
> __Output:__ false  
 
<br>

#### Constraints:

- <code>1 <= n <= 2<sup>31</sup> - 1</code>
