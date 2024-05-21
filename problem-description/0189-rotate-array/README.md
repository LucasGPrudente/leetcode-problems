## [189. Rotate Array](https://leetcode.com/problems/rotate-array)

<code>Medium</code> <code>Array</code> <code>Math</code> <code>Two Pointers</code>

<br>

Given an integer array <code>nums</code>, rotate the array to the right by <code>k</code> steps, where <code>k</code> is non-negative.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,4,5,6,7], k = 3
> 
> __Output:__ [5,6,7,1,2,3,4]
> 
> __Explanation:__  
> rotate 1 steps to the right: [7,1,2,3,4,5,6]  
> rotate 2 steps to the right: [6,7,1,2,3,4,5]  
> rotate 3 steps to the right: [5,6,7,1,2,3,4]  

#### Example 2:

> __Input:__ nums = [-1,-100,3,99], k = 2
> 
> __Output:__ [3,99,-1,-100]
> 
> __Explanation:__   
> rotate 1 steps to the right: [99,-1,-100,3]  
> rotate 2 steps to the right: [3,99,-1,-100]  

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code>
- <code>0 <= k <= 10<sup>5</sup></code>
