## [34. Find First and Last Position of Element in Sorted Array](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array)

<code>Medium</code> <code>Array</code> <code>Binary Search</code>

<br>

Given an array of integers <code>nums</code> sorted in non-decreasing order, find the starting and ending position of a given <code>target</code> value.

If <code>target</code> is not found in the array, return <code>[-1, -1]</code>.

You must write an algorithm with <code>O(log n)</code> runtime complexity.

<br>

#### Example 1:

> __Input:__ nums = [5,7,7,8,8,10], target = 8
> 
> __Output:__ [3,4]  

#### Example 2:

> __Input:__ nums = [5,7,7,8,8,10], target = 6
> 
> __Output:__ [-1,-1]  

#### Example 3:

> __Input:__ nums = [], target = 0
> 
> __Output:__ [-1,-1]  
 
<br>

#### Constraints:

- <code>0 <= nums.length <= 10<sup>5</sup></code>
- <code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
- <code>nums</code> is a non-decreasing array.
- <code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code>
