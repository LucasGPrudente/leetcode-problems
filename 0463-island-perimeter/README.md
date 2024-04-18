## [463. Island Perimeter](https://leetcode.com/problems/island-perimeter/)

<code>Easy</code> <code>Array</code> <code>Depth-First Search</code> <code>Breadth-First Search</code> <code>Matrix</code>

<br>

You are given <code>row x col</code> <code>grid</code> representing a map where <code>grid[i][j] = 1</code> represents land and <code>grid[i][j] = 0</code> represents water.

Grid cells are connected __horizontally/vertically__ (not diagonally). The <code>grid</code> is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

<br>

#### Example 1:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/a792217c-1ad2-4f7e-b676-174a9417d056)

> __Input:__ grid = [[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]
> 
> __Output:__ 16
> 
> __Explanation:__ The perimeter is the 16 yellow stripes in the image above.

#### Example 2:

> __Input:__ grid = [[1]]
>   
> __Output:__ 4  

#### Example 3:

> __Input:__ grid = [[1,0]]
> 
> __Output:__ 4  

<br>

#### Constraints:

- <code>row == grid.length</code>
- <code>col == grid[i].length</code>
- <code>1 <= row, col <= 100</code>
- <code>grid[i][j]</code> is <code>0</code> or <code>1</code>.
- There is exactly one island in <code>grid</code>.
