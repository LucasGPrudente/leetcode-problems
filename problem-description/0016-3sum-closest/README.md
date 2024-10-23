## [16. 3Sum Closest](https://leetcode.com/problems/3sum-closest)

<code>Medium</code> <code>Array</code> <code>Two Pointers</code> <code>Sorting</code>

<br>

Given an integer array <code>nums</code> of length <code>n</code> and an integer <code>target</code>, find three integers in <code>nums</code> such that the sum is closest to <code>target</code>.

Return *the sum of the three integers.*

You may assume that each input would have exactly one solution.

<br>

#### Example 1:

> __Input:__ nums = [-1,2,1,-4], target = 1
> 
> __Output:__ 2 
> 
> __Explanation:__ The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
> 
#### Example 2:

> __Input:__ nums = [0,0,0], target = 1
> 
> __Output:__ 0
> 
> __Explanation:__ The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

<br>

#### Constraints:

- <code>3 <= nums.length <= 500</code>
- <code>-1000 <= nums[i] <= 1000</code>
- <code>-10<sup>4</sup> <= target <= 10<sup>4</sup></code>
