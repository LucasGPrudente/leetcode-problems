## [2373. Largest Local Values in a Matrix](https://leetcode.com/problems/largest-local-values-in-a-matrix)

<code>Easy</code> <code>Array</code> <code>Matrix</code>

<br>

You are given an <code>n x n</code> integer matrix <code>Easy</code>grid.

Generate an integer matrix <code>maxLocal</code> of size <code>(n - 2) x (n - 2)</code> such that:

- <code>maxLocal[i][j]</code> is equal to the __largest__ value of the <code>3 x 3</code> matrix in <code>grid</code> centered around row <code>i + 1</code> and column <code>j + 1</code>.

In other words, we want to find the largest value in every contiguous <code>3 x 3</code> matrix in <code>grid</code>.

Return *the generated matrix*.

<br>

#### Example 1:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/7531554a-1b87-49a3-a040-dd94c87a3c6d)

> __Input:__ grid = [[9,9,8,1],[5,6,2,6],[8,2,6,4],[6,2,2,2]]
> 
> __Output:__ [[9,9],[8,6]]
> 
> __Explanation:__ The diagram above shows the original matrix and the generated matrix.  
> Notice that each value in the generated matrix corresponds to the largest value of a contiguous 3 x 3 matrix in grid.  

#### Example 2:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/93a5dd9c-6f33-44b1-b20a-2ae97ecbbe35)

> __Input:__ grid = [[1,1,1,1,1],[1,1,1,1,1],[1,1,2,1,1],[1,1,1,1,1],[1,1,1,1,1]]
>  
> __Output:__ [[2,2,2],[2,2,2],[2,2,2]]
> 
> __Explanation:__ Notice that the 2 is contained within every contiguous 3 x 3 matrix in grid.  

<br>

#### Constraints:

- <code>n == grid.length == grid[i].length</code>
- <code>3 <= n <= 100</code>
- <code>1 <= grid[i][j] <= 100</code>
