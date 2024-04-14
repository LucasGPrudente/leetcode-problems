## [1137. N-th Tribonacci Number](https://leetcode.com/problems/n-th-tribonacci-number/)

<code>Easy</code>

<br>

The Tribonacci sequence T<sub>n</sub> is defined as follows: 

T<sub>0</sub> = 0, T<sub>1</sub> = 1, T<sub>2</sub> = 1, and T<sub>n+3</sub> = T<sub>n</sub> + T<sub>n+1</sub> + T<sub>n+2</sub> for n >= 0.

Given <code>n</code>, return the value of T<sub>n.

<br>

#### Example 1:

> __Input:__ n = 4  
> __Output:__ 4  
> __Explanation:__  
> T_3 = 0 + 1 + 1 = 2  
> T_4 = 1 + 1 + 2 = 4  

#### Example 2:

> __Input:__ n = 25  
> __Output:__ 1389537  

<br>

#### Constraints:

- <code>0 <= n <= 37</code>
- The answer is guaranteed to fit within a 32-bit integer, ie. <code>answer <= 2^31 - 1</code>.
