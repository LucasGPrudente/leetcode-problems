## [3142. Check if Grid Satisfies Conditions](https://leetcode.com/problems/check-if-grid-satisfies-conditions)

<code>Easy</code>

<br>

You are given a 2D matrix <code>grid</code> of size <code>m x n</code>. You need to check if each cell <code>grid[i][j]</code> is:

- Equal to the cell below it, i.e. <code>grid[i][j] == grid[i + 1][j]</code> (if it exists).
- Different from the cell to its right, i.e. <code>grid[i][j] != grid[i][j + 1]</code> (if it exists).

Return <code>true</code> if __all__ the cells satisfy these conditions, otherwise, return <code>false</code>.

<br>

#### Example 1:

> __Input:__ grid = [[1,0,2],[1,0,2]]  
>   
> __Output:__ true  
>   
> __Explanation:__ All the cells in the grid satisfy the conditions.  

#### Example 2:

> __Input:__ grid = [[1,1,1],[0,0,0]]  
>   
> __Output:__ false  
>   
> __Explanation:__ All cells in the first row are equal.  

#### Example 3:

> __Input:__ grid = [[1],[2],[3]]  
>   
> __Output:__ false  
>   
> __Explanation:__ Cells in the first column have different values.  

<br>

#### Constraints:

- <code>1 <= n, m <= 10</code>
- <code>0 <= grid[i][j] <= 9</code>
