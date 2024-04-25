## [665. Non-decreasing Array](https://leetcode.com/problems/non-decreasing-array)

<code>Medium</code> <code>Array</code>

<br>

Given an array <code>nums</code> with <code>n</code> integers, your task is to check if it could become non-decreasing by modifying __at most one element__.

We define an array is non-decreasing if <code>nums[i] <= nums[i + 1]</code> holds for every <code>i</code> __(0-based)__ such that <code>(0 <= i <= n - 2)</code>.

<br>

#### Example 1:

> __Input:__ nums = [4,2,3]  
> 
> __Output:__ true  
> 
> __Explanation:__ You could modify the first 4 to 1 to get a non-decreasing array.  

#### Example 2:

> __Input:__ nums = [4,2,1]  
> 
> __Output:__ false  
> 
> __Explanation:__ You cannot get a non-decreasing array by modifying at most one element.  

<br>

#### Constraints:

- <code>n == nums.length</code>
- <code>1 <= n <= 10<sup>4</sup></code>
- <code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code>
