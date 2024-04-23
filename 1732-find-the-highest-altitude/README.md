## [1732. Find the Highest Altitude](https://leetcode.com/problems/find-the-highest-altitude/description/)

<code>Easy</code> <code>Array</code> <code>Prefix Sum</code>

<br>

There is a biker going on a road trip. The road trip consists of <code>n + 1</code> points at different altitudes. The biker starts his trip on point <code>0</code> with altitude equal <code>0</code>.

You are given an integer array <code>gain</code> of length <code>n</code> where <code>gain[i]</code> is the __net gain in altitude__ between points <code>i​​​​​​</code> and <code>i + 1</code> for all <code>(0 <= i < n)</code>. Return *the __highest altitude__ of a point*.

<br>

#### Example 1:

> __Input:__ gain = [-5,1,5,0,-7]
> 
> __Output:__ 1
> 
> __Explanation:__ The altitudes are [0,-5,-4,1,1,-6]. The highest is 1.  

#### Example 2:

> __Input:__ gain = [-4,-3,-2,-1,4,3,2]
> 
> __Output:__ 0
> 
> __Explanation:__ The altitudes are [0,-4,-7,-9,-10,-6,-3,-1]. The highest is 0.  

<br>

#### Constraints:

- <code>n == gain.length</code>
- <code>1 <= n <= 100</code>
- <code>-100 <= gain[i] <= 100</code>
