## [3151. Special Array I](https://leetcode.com/problems/special-array-i)

<code>Easy</code> <code>Array</code>

<br>

An array is considered __special__ if every pair of its adjacent elements contains two numbers with different parity.

You are given an array of integers <code>nums</code>. Return <code>true</code> if <code>nums</code> is a __special__ array, otherwise, return <code>false</code>.

<br>

#### Example 1:

> __Input:__ nums = [1]  
>   
> __Output:__ true  
>   
> __Explanation:__ There is only one element. So the answer is true.  

#### Example 2:

> __Input:__ nums = [2,1,4]  
>   
> __Output:__ true  
>   
> __Explanation:__ There is only two pairs: (2,1) and (1,4), and both of them contain numbers with different parity. So the answer is true.  

#### Example 3:

> __Input:__ nums = [4,3,1,6]  
>   
> __Output:__ false  
>   
> __Explanation:__ nums[1] and nums[2] are both odd. So the answer is false.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 100</code>
- <code>1 <= nums[i] <= 100</code>
