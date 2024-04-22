## [1920. Build Array from Permutation](https://leetcode.com/problems/build-array-from-permutation)

<code>Easy</code> <code>Array</code> <code>Simulation</code>

<br>

Given a __zero-based permutation__ <code>nums</code> __(0-indexed)__, build an array <code>ans</code> of the __same length__ where <code>ans[i] = nums[nums[i]]</code> for each <code>0 <= i < nums.length</code> and return it.

A __zero-based permutation__ <code>nums</code> is an array of __distinct__ integers from <code>0</code> to <code>nums.length - 1</code> __(inclusive)__.

<br>

#### Example 1:

> __Input:__ nums = [0,2,1,5,3,4]
> 
> __Output:__ [0,1,2,4,5,3]
> 
> __Explanation:__ The array ans is built as follows:   
> ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]  
>     = [nums[0], nums[2], nums[1], nums[5], nums[3], nums[4]]  
>     = [0,1,2,4,5,3]  
    
#### Example 2:

> __Input:__ nums = [5,0,1,2,3,4]
> 
> __Output:__ [4,5,0,1,2,3]
> 
> __Explanation:__ The array ans is built as follows:  
> ans = [nums[nums[0]], nums[nums[1]], nums[nums[2]], nums[nums[3]], nums[nums[4]], nums[nums[5]]]  
>     = [nums[5], nums[0], nums[1], nums[2], nums[3], nums[4]]  
>     = [4,5,0,1,2,3]  

<br>

#### Constraints:

- <code>1 <= nums.length <= 1000</code>
- <code>0 <= nums[i] < nums.length</code>
- The elements in <code>nums</code> are distinct.

__Follow-up:__ Can you solve it without using an extra space (i.e., <code>O(1)</code> memory)?
