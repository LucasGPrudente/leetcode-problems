## [35. Search Insert Position](https://leetcode.com/problems/search-insert-position/)

<code>Easy</code>

<br>

Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

You must write an algorithm with <code>O(log n)</code> runtime complexity.

<br>

#### Example 1:

> __Input:__ nums = [1,3,5,6], target = 5  
> __Output:__ 2  

#### Example 2:

> __Input:__ nums = [1,3,5,6], target = 2  
> __Output:__ 1  

#### Example 3:

> __Input:__ nums = [1,3,5,6], target = 7  
> __Output:__ 4  

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>4</sup></code>
- <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
- <code>nums</code> contains __distinct__ values sorted in __ascending order__.
- <code>-10<sup>4</sup> <= target <= 10<sup>4</sup></code>
