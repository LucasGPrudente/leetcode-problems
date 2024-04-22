## [867. Transpose Matrix](https://leetcode.com/problems/transpose-matrix)

<code>Easy</code> <code>Array</code> <code>Matrix</code> <code>Simulation</code>

<br>

Given a 2D integer array matrix, return *the __transpose__ of matrix*.

The __transpose__ of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/1dda5cb5-6107-4ed2-b8d7-ab8460849bf3)

<br>

#### Example 1:

> __Input:__ matrix = [[1,2,3],[4,5,6],[7,8,9]]
> 
> __Output:__ [[1,4,7],[2,5,8],[3,6,9]]  

#### Example 2:

> __Input:__ matrix = [[1,2,3],[4,5,6]]
> 
> __Output:__ [[1,4],[2,5],[3,6]]   

<br>

#### Constraints:

- <code>m == matrix.length</code>
- <code>n == matrix[i].length</code>
- <code>1 <= m, n <= 1000</code>
- <code>1 <= m * n <= 10<sup>5</sup></code>
- <code>-10<sup>9</sup> <= matrix[i][j] <= 10<sup>9</sup></code>
