## [3065. Minimum Operations to Exceed Threshold Value I](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/)

<code>Easy</code> <code>Array</code>

<br>

You are given a __0-indexed__ integer array <code>nums</code>, and an integer <code>k</code>.

In one operation, you can remove one occurrence of the smallest element of <code>nums</code>.

Return *the __minimum__ number of operations needed so that all elements of the array are greater than or equal to* <code>k</code>.

<br>

#### Example 1:

> __Input:__ nums = [2,11,10,1,3], k = 10
> 
> __Output:__ 3
> 
> __Explanation:__ After one operation, nums becomes equal to [2, 11, 10, 3].  
> After two operations, nums becomes equal to [11, 10, 3].  
> After three operations, nums becomes equal to [11, 10].  
> At this stage, all the elements of nums are greater than or equal to 10 so we can stop.  
> It can be shown that 3 is the minimum number of operations needed so that all elements of the array are greater than or equal to 10.  

#### Example 2:

> __Input:__ nums = [1,1,2,4,9], k = 1
> 
> __Output:__ 0
> 
> __Explanation:__ All elements of the array are greater than or equal to 1 so we do not need to apply any operations on nums.  

#### Example 3:

> __Input:__ nums = [1,1,2,4,9], k = 9
> 
> __Output:__ 4
> 
> __Explanation:__ only a single element of nums is greater than or equal to 9 so we need to apply the operations 4 times on nums.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 50</code>
- <code>1 <= nums[i] <= 10<sup>9</sup></code>
- <code>1 <= k <= 10<sup>9</sup></code>
- The input is generated such that there is at least one index <code>i</code> such that <code>nums[i] >= k</code>.
