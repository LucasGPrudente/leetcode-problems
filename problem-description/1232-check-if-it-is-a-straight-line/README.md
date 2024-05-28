## [1232. Check If It Is a Straight Line](https://leetcode.com/problems/check-if-it-is-a-straight-line)

<code>Easy</code> <code>Array</code> <code>Math</code> <code>Geometry</code>

<br>

You are given an array <code>coordinates</code>, <code>coordinates[i] = [x, y]</code>, where <code>[x, y]</code> represents the coordinate of a point. Check if these points make a straight line in the XY plane.

<br> 

#### Example 1:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/4dc4dcda-bbe7-4e4f-b353-42b8f10433d6)

> __Input:__ coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
> 
> __Output:__ true  

#### Example 2:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/ad186a83-4c20-45d5-9019-0cf78f09e38d)

> __Input:__ coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
> 
> __Output:__ false  
 
<br>

#### Constraints:

- <code>2 <= coordinates.length <= 1000</code>
- <code>coordinates[i].length == 2</code>
- <code>-10<sup>4</sup> <= coordinates[i][0], coordinates[i][1] <= 10<sup>4</sup></code>
- <code>coordinates</code> contains no duplicate point.
