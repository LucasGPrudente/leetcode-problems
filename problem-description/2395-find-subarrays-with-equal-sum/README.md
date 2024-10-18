## [2395. Find Subarrays With Equal Sum](https://leetcode.com/problems/find-subarrays-with-equal-sum)

<code>Easy</code> <code>Array</code> <code>Hash Table</code>

<br>

Given a __0-indexed__ integer array <code>nums</code>, determine whether there exist two subarrays of length <code>2</code> with __equal__ sum. Note that the two subarrays must begin at __different__ indices.

Return <code>true</code> *if these subarrays exist, and* <code>false</code> *otherwise*.

A __subarray__ is a contiguous non-empty sequence of elements within an array.

<br>

#### Example 1:

> __Input:__ nums = [4,2,4]
>
> __Output:__ true
>
> __Explanation:__ The subarrays with elements [4,2] and [2,4] have the same sum of 6.

#### Example 2:

> __Input:__ nums = [1,2,3,4,5]
>
> __Output:__ false
>
> __Explanation:__ No two subarrays of size 2 have the same sum.


#### Example 3:

> __Input:__ nums = [0,0,0]
>
> __Output:__ true
>
> __Explanation:__ The subarrays [nums[0],nums[1]] and [nums[1],nums[2]] have the same sum of 0.
Note that even though the subarrays have the same content, the two subarrays are considered different because they are in different positions in the original array.

<br>

#### Constraints:

- <code>2 <= nums.length <= 1000</code>
- <code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
