## [3079. Find the Sum of Encrypted Integers](https://leetcode.com/problems/find-the-sum-of-encrypted-integers/)

<code>Easy</code> <code>Array</code> <code>Math</code>

<br>

You are given an integer array <code>nums</code> containing __positive__ integers. We define a function <code>encrypt</code> such that <code>encrypt(x)</code> replaces __every__ digit in <code>x</code> with the __largest__ digit in <code>x</code>. For example, <code>encrypt(523) = 555</code> and <code>encrypt(213) = 333</code>.

Return *the sum of encrypted elements*.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3]  
>   
> __Output:__ 6  
>   
> __Explanation:__ The encrypted elements are <code>[1,2,3]</code>. The sum of encrypted elements is <code>1 + 2 + 3 == 6</code>.  

#### Example 2:

> __Input:__ nums = [10,21,31]  
>   
> __Output:__ 66  
>   
> __Explanation:__ The encrypted elements are <code>[11,22,33]</code>. The sum of encrypted elements is <code>11 + 22 + 33 == 66</code>.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 50</code>
- <code>1 <= nums[i] <= 1000</code>
