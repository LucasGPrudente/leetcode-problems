## [215. Kth Largest Element in an Array](https://leetcode.com/problems/kth-largest-element-in-an-array)

<code>Medium</code> <code>Array</code> <code>Divide and Conquer</code> <code>Sorting</code> <code>Heap (Priority Queue)</code> <code>Quickselect</code>

<br>

Given an integer array <code>nums</code> and an integer <code>k</code>, return the <code>k<sup>th</sup></code> largest element in the array.

Note that it is the <code>k<sup>th</sup></code> largest element in the sorted order, not the <code>k<sup>th</sup></code> distinct element.

Can you solve it without sorting?

<br>

#### Example 1:

> __Input:__ nums = [3,2,1,5,6,4], k = 2
> 
> __Output:__ 5  

#### Example 2:

> __Input:__ nums = [3,2,3,1,2,4,5,5,6], k = 4
> 
> __Output:__ 4  
 
<br>

#### Constraints:

- <code>1 <= k <= nums.length <= 10<sup>5</sup></code>
- <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>
