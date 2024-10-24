## [164. Maximum Gap](https://leetcode.com/problems/maximum-gap)

<code>Medium</code> <code>Array</code> <code>Sorting</code> <code>Bucket Sort</code> <code>Radix Sort</code>

<br>

Given an integer array <code>nums</code>, return *the maximum difference between two successive elements in its sorted form*. If the array contains less than two elements, return <code>0</code>.

You must write an algorithm that runs in linear time and uses linear extra space.

<br>

#### Example 1:

> __Input:__ nums = [3,6,9,1]
> 
> __Output:__ 3
> 
> __Explanation:__ The sorted form of the array is [1,3,6,9], either (3,6) or (6,9) has the maximum difference 3.

#### Example 2:

> __Input:__ nums = [10]
> 
> __Output:__ 0
> 
> __Explanation:__ The array contains less than 2 elements, therefore return 0.
 
<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>0 <= nums[i] <= 10<sup>9</sup></code>
