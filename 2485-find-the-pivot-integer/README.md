## [2485. Find the Pivot Integer](https://leetcode.com/problems/find-the-pivot-integer)

<code>Easy</code> <code>Math</code> <code>Prefix Sum</code>

<br>

Given a positive integer <code>n</code>, find the __pivot integer__ <code>x</code> such that:

- The sum of all elements between <code>1</code> and <code>x</code> inclusively equals the sum of all elements between <code>x</code> and <code>n</code> inclusively.

Return *the pivot integer* <code>x</code>. If no such integer exists, return <code>-1</code>. It is guaranteed that there will be at most one pivot index for the given input.

<br>

#### Example 1:

> __Input:__ n = 8
> 
> __Output:__ 6
> 
> __Explanation:__ 6 is the pivot integer since: 1 + 2 + 3 + 4 + 5 + 6 = 6 + 7 + 8 = 21.  

#### Example 2:

> __Input:__ n = 1
> 
> __Output:__ 1
> 
> __Explanation:__ 1 is the pivot integer since: 1 = 1.  

#### Example 3:

> __Input:__ n = 4
> 
> __Output:__ -1
> 
> __Explanation:__ It can be proved that no such integer exist.  

<br>

#### Constraints:

- <code>1 <= n <= 1000</code>
