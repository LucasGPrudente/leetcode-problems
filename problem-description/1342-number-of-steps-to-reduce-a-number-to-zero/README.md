## [1342. Number of Steps to Reduce a Number to Zero](https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/)

<code>Easy</code> <code>Math</code> <code>Bit Manipulation</code>

<br>

Given an integer <code>num</code>, return *the number of steps to reduce it to zero*.

In one step, if the current number is even, you have to divide it by <code>2</code>, otherwise, you have to subtract <code>1</code> from it.

<br>

#### Example 1:

> __Input:__ num = 14
> 
> __Output:__ 6
> 
> __Explanation:__  
> Step 1) 14 is even; divide by 2 and obtain 7.  
> Step 2) 7 is odd; subtract 1 and obtain 6.  
> Step 3) 6 is even; divide by 2 and obtain 3.  
> Step 4) 3 is odd; subtract 1 and obtain 2.  
> Step 5) 2 is even; divide by 2 and obtain 1.  
> Step 6) 1 is odd; subtract 1 and obtain 0.  

#### Example 2:

> __Input:__ num = 8
>  
> __Output:__ 4
> 
> __Explanation:__  
> Step 1) 8 is even; divide by 2 and obtain 4.  
> Step 2) 4 is even; divide by 2 and obtain 2.  
> Step 3) 2 is even; divide by 2 and obtain 1.  
> Step 4) 1 is odd; subtract 1 and obtain 0.  

#### Example 3:

> __Input:__ num = 123
>  
> __Output:__ 12  

<br>

#### Constraints:

- <code>0 <= num <= 10<sup>6</sup></code>
