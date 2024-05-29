## [3105. Longest Strictly Increasing or Strictly Decreasing Subarray](https://leetcode.com/problems/longest-strictly-increasing-or-strictly-decreasing-subarray)

<code>Easy</code> <code>Array</code>

<br>

You are given an array of integers <code>nums</code>. Return *the length of the __longest subarray__ of* <code>nums</code> *which is either __strictly increasing__ nor __strictly decreasing__*.

<br>

#### Example 1:

> __Input:__ nums = [1,4,3,3,2]  
>   
> __Output:__ 2  
>   
> __Explanation:__  
> - The strictly increasing subarrays of nums are [1], [2], [3], [3], [4], and [1,4].  
> - The strictly decreasing subarrays of nums are [1], [2], [3], [3], [4], [3,2], and [4,3].  
> - Hence, we return 2.  

#### Example 2:

> __Input:__ nums = [3,3,3,3]  
>   
> __Output:__ 1  
>   
> __Explanation:__  
> - The strictly increasing subarrays of nums are [3], [3], [3], and [3].  
> - The strictly decreasing subarrays of nums are [3], [3], [3], and [3].  

Hence, we return 1.

#### Example 3:

> __Input:__ nums = [3,2,1]  
>   
> __Output:__ 3  
>   
> __Explanation:__  
> - The strictly increasing subarrays of nums are [3], [2], and [1].  
> - The strictly decreasing subarrays of nums are [3], [2], [1], [3,2], [2,1], and [3,2,1].  
> - Hence, we return 3.  

<br> 

#### Constraints:

- <code>1 <= nums.length <= 50</code>
- <code>1 <= nums[i] <= 50</code>
