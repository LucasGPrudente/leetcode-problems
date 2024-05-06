## [50. Pow(x, n)](https://leetcode.com/problems/powx-n)

<code>Medium</code> <code>Math</code> <code>Recursion</code>

<br>

Implement __pow(x, n)__, which calculates <code>x</code> raised to the power <code>n</code> (i.e., <code>x<sup>n</sup></code>).

<br>

#### Example 1:

> __Input:__ x = 2.00000, n = 10
> 
> __Output:__ 1024.00000  

#### Example 2:

> __Input:__ x = 2.10000, n = 3
> 
> __Output:__ 9.26100  

#### Example 3:

> __Input:__ x = 2.00000, n = -2
> 
> __Output:__ 0.25000
> 
> __Explanation:__ 2-2 = 1/22 = 1/4 = 0.25  
 
<br>

#### Constraints:

- <code>-100.0 < x < 100.0</code>
- <code>-2<sup>31</sup> <= n <= 2<sup>31</sup>-1</code>
- <code>n</code> is an integer.
- Either <code>x</code> is not zero or <code>n > 0</code>.
- <code>-10<sup>4</sup> <= x<sup>n</sup> <= 10<sup>4</sup></code>
