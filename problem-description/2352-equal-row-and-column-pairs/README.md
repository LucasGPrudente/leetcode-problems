## [2352. Equal Row and Column Pairs](https://leetcode.com/problems/equal-row-and-column-pairs)

<code>Medium</code> <code>Array</code> <code>Hash Table</code> <code>Matrix</code> <code>Simulation</code>

<br>

Given a __0-indexed__ <code>n x n</code> integer matrix <code>grid</code>, return *the number of pairs* <code>(r<sub>i</sub>, c<sub>j</sub>)</code> *such that row* <code>r<sub>i</sub></code> *and column* <code>c<sub>j</sub></code> *are equal*.

A row and column pair is considered equal if they contain the same elements in the same order (i.e., an equal array).

<br>

#### Example 1:


> __Input:__ grid = [[3,2,1],[1,7,6],[2,7,7]]
> 
> __Output:__ 1
> 
> __Explanation:__ There is 1 equal row and column pair:  
> - (Row 2, Column 1): [2,7,7]  

#### Example 2:

> __Input:__ grid = [[3,1,2,2],[1,4,4,5],[2,4,2,2],[2,4,2,2]]
> 
> __Output:__ 3
> 
> __Explanation:__ There are 3 equal row and column pairs:  
> - (Row 0, Column 0): [3,1,2,2]  
> - (Row 2, Column 2): [2,4,2,2]  
> - (Row 3, Column 2): [2,4,2,2]  
 
<br>

#### Constraints:

- <code>n == grid.length == grid[i].length</code>
- <code>1 <= n <= 200</code>
- <code>1 <= grid[i][j] <= 10<sup>5</sup></code>
