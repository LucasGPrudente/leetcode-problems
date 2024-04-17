## [3115. Maximum Prime Difference](https://leetcode.com/problems/maximum-prime-difference/description/)

<code>Medium</code> <code>Array</code> <code>Math</code> <code>Number Theory</code>

<br>

You are given an integer array <code>nums</code>.

Return an integer that is the __maximum__ distance between the __indices__ of two (not necessarily different) prime numbers in <code>nums</code>.

<br>

#### Example 1:

> __Input:__ nums = [4,2,9,5,3]  
>   
> __Output:__ 3  
>   
> __Explanation:__ <code>nums[1]</code>, <code>nums[3]</code>, and <code>nums[4]</code> are prime. So the answer is <code>|4 - 1| = 3</code>.  

#### Example 2:

> __Input:__ nums = [4,8,2,8]  
>   
> __Output:__ 0  
>   
> __Explanation:__ <code>nums[2]</code> is prime. Because there is just one prime number, the answer is <code>|2 - 2| = 0</code>.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 3 * 10<sup>5</sup></code>
- <code>1 <= nums[i] <= 100</code>
- The input is generated such that the number of prime numbers in the <code>nums</code> is at least one.
