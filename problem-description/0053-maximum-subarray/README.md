## [53. Maximum Subarray](https://leetcode.com/problems/maximum-subarray)

<code>Medium</code> <code>Array</code> <code>Divide and Conquer</code> <code>Dynamic Programming</code>

<br>

Given an integer array <code>nums</code>, find the subarray with the largest sum, and return *its sum*.

<br>

#### Example 1:

> __Input:__ nums = [-2,1,-3,4,-1,2,1,-5,4]
>
> __Output:__ 1
>
> __Explanation:__ The subarray [4,-1,2,1] has the largest sum 6.

#### Example 2:

> __Input:__ [1]
>
> __Output:__ 1
>
> __Explanation:__ The subarray [1] has the largest sum 1.

#### Example 3:

> __Input:__ nums = [5,4,-1,7,8]
>
> __Output:__ 23
>
> __Explanation:__ The subarray [5,4,-1,7,8] has the largest sum 23.

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-10<sup>4</sup> <= nums[i] <= 10<sup>4</sup></code>