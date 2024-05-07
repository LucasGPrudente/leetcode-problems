## [2769. Find the Maximum Achievable Number](https://leetcode.com/problems/find-the-maximum-achievable-number)

<code>Easy</code> <code>Math</code>

<br>

You are given two integers, <code>num</code> and <code>t</code>.

An integer <code>x</code> is called __achievable__ if it can become equal to <code>num</code> after applying the following operation no more than <code>t</code> times:

- Increase or decrease <code>x</code> by <code>1</code>, and simultaneously increase or decrease <code>num</code> by <code>1</code>.

Return *the maximum possible achievable number*. It can be proven that there exists at least one achievable number.

<br>

#### Example 1:

> __Input:__ num = 4, t = 1
> 
> __Output:__ 6
> 
> __Explanation:__ The maximum achievable number is x = 6; it can become equal to num after performing this operation:  
> 1. Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.
>  
> It can be proven that there is no achievable number larger than 6.  

#### Example 2:

> __Input:__ num = 3, t = 2
> 
> __Output:__ 7
> 
> __Explanation:__ The maximum achievable number is x = 7; after performing these operations, x will equal num:   
> 1. Decrease x by 1, and increase num by 1. Now, x = 6 and num = 4.  
> 2. Decrease x by 1, and increase num by 1. Now, x = 5 and num = 5.
>    
> It can be proven that there is no achievable number larger than 7.  

<br>

#### Constraints:

- <code>1 <= num, t <= 50</code>
