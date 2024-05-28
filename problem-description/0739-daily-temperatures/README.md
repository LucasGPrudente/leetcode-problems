## [739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures)

<code>Medium</code> <code>Array</code> <code>Stack</code> <code>Monotonic Stack</code>

<br>

Given an array of integers <code>temperatures</code> represents the daily temperatures, return an array <code>answer</code> such that <code>answer[i]</code> is the number of days you have to wait after the <code>i<sup>th</sup></code> day to get a warmer temperature. If there is no future day for which this is possible, keep <code>answer[i] == 0</code> instead.

<br>

#### Example 1:

> __Input:__ temperatures = [73,74,75,71,69,72,76,73]
> 
> __Output:__ [1,1,4,2,1,1,0,0]  

#### Example 2:

> __Input:__ temperatures = [30,40,50,60]
> 
> __Output:__ [1,1,1,0]  

#### Example 3:

> __Input:__ temperatures = [30,60,90]
> 
> __Output:__ [1,1,0]  
 
<br>

#### Constraints:

- <code>1 <= temperatures.length <= 10<sup>5</sup></code>
- <code>30 <= temperatures[i] <= 100</code>
