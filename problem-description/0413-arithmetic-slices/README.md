## [413. Arithmetic Slices](https://leetcode.com/problems/arithmetic-slices)

<code>Medium</code> <code>Array</code> <code>Dynamic Programming</code> <code>Sliding Window</code>

<br>

An integer array is called arithmetic if it consists of __at least three elements__ and if the difference between any two consecutive elements is the same.

- For example, <code>[1,3,5,7,9]</code>, <code>[7,7,7,7]</code>, and <code>[3,-1,-5,-9]</code> are arithmetic sequences.

Given an integer array <code>nums</code>, return *the number of arithmetic __subarrays__ of* <code>nums</code>.

A __subarray__ is a contiguous subsequence of the array.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,4]
> 
> __Output:__ 3
> 
> __Explanation:__ We have 3 arithmetic slices in nums: [1, 2, 3], [2, 3, 4] and [1,2,3,4] itself. 

#### Example 2:

> __Input:__ nums = [1]
> 
> __Output:__ 0
 
<br>

#### Constraints:

- <code>1 <= nums.length <= 5000</code>
- <code>-1000 <= nums[i] <= 1000</code>
