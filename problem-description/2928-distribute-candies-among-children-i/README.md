## [2928. Distribute Candies Among Children I](https://leetcode.com/problems/distribute-candies-among-children-i)

<code>Easy</code> <code>Math</code> <code>Combinatorics</code> <code>Enumeration</code>

<br>

You are given two positive integers <code>n</code> and <code>limit</code>.

Return *the __total number__ of ways to distribute* <code>n</code> *candies among* <code>3</code> *children such that no child gets more than* <code>limit</code> *candies*.

<br>

#### Example 1:

> __Input:__ n = 5, limit = 2
> 
> __Output:__ 3
> 
> __Explanation:__ There are 3 ways to distribute 5 candies such that no child gets more than 2 candies:  
> (1, 2, 2), (2, 1, 2) and (2, 2, 1).  

#### Example 2:

> __Input:__ n = 3, limit = 3
> 
> __Output:__ 10
> 
> __Explanation:__ There are 10 ways to distribute 3 candies such that no child gets more than 3 candies:  
> (0, 0, 3), (0, 1, 2), (0, 2, 1), (0, 3, 0), (1, 0, 2), (1, 1, 1), (1, 2, 0), (2, 0, 1), (2, 1, 0) and (3, 0, 0).    
 
<br>

#### Constraints:

- <code>1 <= n <= 50</code>
- <code>1 <= limit <= 50</code>
