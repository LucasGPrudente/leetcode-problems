## [238. Product of Array Except Self](https://leetcode.com/problems/product-of-array-except-self)

<code>Medium</code> <code>Array</code> <code>Prefix Sum</code>

<br>

Given an integer array <code>nums</code>, return an array <code>answer</code> such that <code>answer[i]</code> is equal to the product of all the elements of <code>nums</code> except <code>nums[i]</code>.

The product of any prefix or suffix of <code>nums</code> is __guaranteed__ to fit in a __32-bit__ integer.

You must write an algorithm that runs in <code>O(n)</code> time and without using the division operation.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,4]
> 
> __Output:__ [24,12,8,6]  

#### Example 2:

> __Input:__ nums = [-1,1,0,-3,3]
> 
> __Output:__ [0,0,9,0,0]  

<br>

#### Constraints:

- <code>2 <= nums.length <= 10<sup>5</sup></code>
- <code>-30 <= nums[i] <= 30</code>
- The product of any prefix or suffix of <code>nums</code> is __guaranteed__ to fit in a __32-bit__ integer.
