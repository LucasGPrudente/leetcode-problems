## [704. Binary Search](https://leetcode.com/problems/binary-search/)

<code>Easy</code>

<br>

Given an array of integers <code>nums</code> which is sorted in ascending order, and an integer <code>target</code>, write a function to search <code>target</code> in <code>nums</code>. If <code>target</code> exists, then return its index. Otherwise, return <code>-1</code>.

You must write an algorithm with <code>O(log n)</code> runtime complexity.

<br>

#### Example 1:

> __Input:__ nums = [-1,0,3,5,9,12], target = 9  
> __Output:__ 4  
> __Explanation:__ 9 exists in nums and its index is 4  

#### Example 2:

> __Input:__ nums = [-1,0,3,5,9,12], target = 2  
> __Output:__ -1  
> __Explanation:__ 2 does not exist in nums so return -1  

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>4</sup></code>
- <code>-10<sup>4</sup> < nums[i], target < 10<sup>4</sup></code>
- All the integers in <code>nums</code> are __unique__.
- <code>nums</code> is sorted in ascending order.
