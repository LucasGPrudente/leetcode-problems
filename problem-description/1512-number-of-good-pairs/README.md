## [1512. Number of Good Pairs](https://leetcode.com/problems/number-of-good-pairs/)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>Math</code> <code>Counting</code>

<br>

Given an array of integers <code>nums</code>, return *the number of __good pairs__*.

A pair <code>(i, j)</code> is called good if <code>nums[i] == nums[j]</code> and <code>i</code> < <code>j</code>.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,1,1,3]
>  
> __Output:__ 4
> 
> __Explanation:__ There are 4 good pairs (0,3), (0,4), (3,4), (2,5) 0-indexed.  

#### Example 2:

> __Input:__ nums = [1,1,1,1]
> 
> __Output:__ 6
> 
> __Explanation:__ Each pair in the array are good.  

#### Example 3:

> __Input:__ nums = [1,2,3]
> 
> __Output:__ 0

<br>

#### Constraints:

- <code>1 <= nums.length <= 100</code>
- <code>1 <= nums[i] <= 100</code>
