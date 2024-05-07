## [896. Monotonic Array](https://leetcode.com/problems/monotonic-array/)

<code>Easy</code> <code>Array</code>

<br>

An array is __monotonic__ if it is either monotone increasing or monotone decreasing.

An array <code>nums</code> is monotone increasing if for all <code>i <= j</code>, <code>nums[i] <= nums[j]</code>. An array <code>nums</code> is monotone decreasing if for all <code>i <= j</code>, <code>nums[i] >= nums[j]</code>.

Given an integer array <code>nums</code>, return <code>true</code> *if the given array is monotonic, or* <code>false</code> *otherwise*.

<br>

#### Example 1:

> __Input:__ nums = [1,2,2,3]
> 
> __Output:__ true  

#### Example 2:

> __Input:__ nums = [6,5,4,4]
> 
> __Output:__ true  

#### Example 3:

> __Input:__ nums = [1,3,2]
> 
> __Output:__ false  

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code>
