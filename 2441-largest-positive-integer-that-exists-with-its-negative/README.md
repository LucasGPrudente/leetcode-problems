## [2441. Largest Positive Integer That Exists With Its Negative](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>Two Pointers</code> <code>Sorting</code>

<br>

Given an integer array <code>nums</code> that __does not contain__ any zeros, find __the largest positive__ integer <code>k</code> such that <code>-k</code> also exists in the array.

Return *the positive integer* <code>k</code>. If there is no such integer, return <code>-1</code>.

<br>

#### Example 1:

> __Input:__ nums = [-1,2,-3,3]
> 
> __Output:__ 3
> 
> __Explanation:__ 3 is the only valid k we can find in the array.  

#### Example 2:

> __Input:__ nums = [-1,10,6,7,-7,1]
> 
> __Output:__ 7
> 
> __Explanation:__ Both 1 and 7 have their corresponding negative values in the array. 7 has a larger value.  

#### Example 3:

> __Input:__ nums = [-10,8,6,7,-2,-3]
> 
> __Output:__ -1
> 
> __Explanation:__ There is no a single valid k, we return -1.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 1000</code>
- <code>-1000 <= nums[i] <= 1000</code>
- <code>nums[i] != 0</code>
