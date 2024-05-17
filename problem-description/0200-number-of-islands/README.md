## [200. Number of Islands](https://leetcode.com/problems/number-of-islands)

<code>Medium</code> <code>Array</code> <code>Depth-First Search</code> <code>Breadth-First Search</code> <code>Union Find</code> <code>Matrix</code>

<br>

Given an <code>m x n</code> 2D binary <code>grid</code> grid which represents a map of <code>'1'</code>s (land) and <code>'0'</code>s (water), return *the number of islands*.

An __island__ is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

<br>

#### Example 1:

> __Input:__ grid =  
> [  
>   ["1","1","1","1","0"],  
>   ["1","1","0","1","0"],  
>   ["1","1","0","0","0"],  
>   ["0","0","0","0","0"]  
> ]  
>   
> __Output:__ 1  

#### Example 2:

> __Input:__ grid =   
> [  
>   ["1","1","0","0","0"],  
>   ["1","1","0","0","0"],  
>   ["0","0","1","0","0"],  
>   ["0","0","0","1","1"]  
> ]  
>   
> __Output:__ 3  
 
<br>

#### Constraints:

- <code>m == grid.length</code>
- <code>n == grid[i].length</code>
- <code>1 <= m, n <= 300</code>
- <code>grid[i][j]</code> is <code>'0'</code> or <code>'1'</code>.
