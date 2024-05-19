## [75. Sort Colors](https://leetcode.com/problems/sort-colors)

<code>Medium</code> <code>Array</code> <code>Two Pointers</code> <code>Sorting</code>

<br>

Given an array <code>nums</code> with <code>n</code> objects colored red, white, or blue, sort them __in-place__ so that objects of the same color are adjacent, with the colors in the order red, white, and blue.

We will use the integers <code>0</code>, <code>1</code>, and <code>2</code> to represent the color red, white, and blue, respectively.

You must solve this problem without using the library's sort function.

<br>

#### Example 1:

> __Input:__ nums = [2,0,2,1,1,0]
> 
> __Output:__ [0,0,1,1,2,2]  

#### Example 2:

> __Input:__ nums = [2,0,1]
> 
> __Output:__ [0,1,2]  
 
<br>

#### Constraints:

- <code>n == nums.length</code>
- <code>1 <= n <= 300</code>
- <code>nums[i]</code> is either <code>0</code>, <code>1</code>, or <code>2</code>.
