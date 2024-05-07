## [2574. Left and Right Sum Differences](https://leetcode.com/problems/left-and-right-sum-differences)

<code>Easy</code> <code>Array</code> <code>Prefix Sum</code>
 
<br>

Given a 0-indexed integer array <code>nums</code>, find a 0-indexed integer array <code>answer</code> where:

- <code>answer.length == nums.length</code>.
- <code>answer[i] = |leftSum[i] - rightSum[i]|</code>.

Where:

- <code>leftSum[i]</code> is the sum of elements to the left of the index <code>i</code> in the array <code>nums</code>. If there is no such element, <code>leftSum[i] = 0</code>.
- <code>rightSum[i]</code> is the sum of elements to the right of the index <code>i</code> in the array <code>nums</code>. If there is no such element, <code>rightSum[i] = 0</code>.

Return *the array* <code>answer</code>.

<br>

Example 1:

> __Input:__ nums = [10,4,8,3]
> 
> __Output:__ [15,1,11,22]
> 
> __Explanation:__ The array leftSum is [0,10,14,22] and the array rightSum is [15,11,3,0].  
> The array answer is [ |0 - 15| , |10 - 11| , |14 - 3| , |22 - 0| ] = [15,1,11,22].  

Example 2:

> __Input:__ nums = [1]
> 
> __Output:__ [0]
> 
> __Explanation:__ The array leftSum is [0] and the array rightSum is [0].  
> The array answer is [ |0 - 0| ] = [0].   

<br>

Constraints:

- <code>1 <= nums.length <= 1000</code>
- <code>1 <= nums[i] <= 10<sup>5</sup></code>
