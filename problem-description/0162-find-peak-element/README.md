## [162. Find Peak Element](https://leetcode.com/problems/find-peak-element)

<code>Medium</code> <code>Array</code> <code>Binary Search</code>

<br>

A peak element is an element that is strictly greater than its neighbors.

Given a __0-indexed__ integer array <code>nums</code>, find a peak element, and return its index. If the array contains multiple peaks, return the index to __any of the peaks__.

You may imagine that <code>nums[-1] = nums[n] = -∞</code>. In other words, an element is always considered to be strictly greater than a neighbor that is outside the array.

You must write an algorithm that runs in <code>O(log n)</code> time.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,1]
> 
> __Output:__ 2
> 
> __Explanation:__ 3 is a peak element and your function should return the index number 2.    

#### Example 2:

> __Input:__ nums = [1,2,1,3,5,6,4]
>
> __Output:__ 5
> 
> __Explanation:__ Your function can return either index number 1 where the peak element is 2, or index number 5 where the peak element is 6.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 1000</code>
- <code>-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code>
- <code>nums[i] != nums[i + 1]</code> for all valid <code>i</code>.
