## [3127. Make a Square with the Same Color](https://leetcode.com/problems/make-a-square-with-the-same-color)

<code>Easy</code> <code>Array</code> <code>Matrix</code> <code>Enumeration</code>

<br>

You are given a 2D matrix <code>grid</code> of size <code>3 x 3</code> consisting only of characters <code>'B'</code> and <code>'W'</code>. Character <code>'W'</code> represents the white color, and character <code>'B'</code> represents the black color.

Your task is to change the color of __at most one__ cell so that the matrix has a <code>2 x 2</code> square where all cells are of the same color.

Return <code>true</code> if it is possible to create a <code>2 x 2</code> square of the same color, otherwise, return <code>false</code>.

<br>

#### Example 1:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/2af0c9ca-4719-4ecb-8b21-863428df1abd)

> __Input:__ grid = [["B","W","B"],["B","W","W"],["B","W","B"]]
> 
> __Output:__ true
> 
> __Explanation:__ It can be done by changing the color of the <code>grid[0][2]</code>.

#### Example 2:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/4d7240e2-09ff-4b89-b12d-7aacc8f80522)

> __Input:__ grid = [["B","W","B"],["W","B","W"],["B","W","B"]]
> 
> __Output:__ false
> 
> __Explanation:__ It cannot be done by changing at most one cell.

#### Example 3:

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/a8e6aeb5-6a6f-4cfd-a8b1-31faf3e7a266)

> __Input:__ grid = [["B","W","B"],["B","W","W"],["B","W","W"]]
> 
> __Output:__ true
> 
> __Explanation:__ The <code>grid</code> already contains a <code>2 x 2</code> square of the same color.

<br>

#### Constraints:

- <code>grid.length == 3</code>
- <code>grid[i].length == 3</code>
- <code>grid[i][j]</code> is either <code>'W'</code> or <code>'B'</code>.
