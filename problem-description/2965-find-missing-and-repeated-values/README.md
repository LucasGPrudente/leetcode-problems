## [2965. Find Missing and Repeated Values](https://leetcode.com/problems/find-missing-and-repeated-values)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>Math</code> <code>Matrix</code>

<br>

You are given a __0-indexed__ 2D integer matrix <code>grid</code> of size <code>n * n</code> with values in the range <code>[1, n<sup>2</sup>]</code>. Each integer appears __exactly once__ except a which appears twice and <code>b</code> which is __missing__. The task is to find the repeating and missing numbers <code>a</code> and <code>b</code>.

Return a __0-indexed__ integer array <code>ans</code> of size <code>2</code> where <code>ans[0]</code> equals to <code>a</code> and <code>ans[1]</code> equals to <code>b</code>.

<br>

#### Example 1:

> __Input:__ grid = [[1,3],[2,2]]
> 
> __Output:__ [2,4]
> 
> __Explanation:__ Number 2 is repeated and number 4 is missing so the answer is [2,4].  

#### Example 2:

> __Input:__ grid = [[9,1,7],[8,9,2],[3,4,6]]
> 
> __Output:__ [9,5]
> 
> __Explanation:__ Number 9 is repeated and number 5 is missing so the answer is [9,5].  
 
<br>

#### Constraints:

- <code>2 <= n == grid.length == grid[i].length <= 50</code>
- <code>1 <= grid[i][j] <= n * n</code>
- For all <code>x</code> that <code>1 <= x <= n * n</code> there is exactly one <code>x</code> that is not equal to any of the grid members.
- For all <code>x</code> that <code>1 <= x <= n * n</code> there is exactly one <code>x</code> that is equal to exactly two of the grid members.
- For all <code>x</code> that <code>1 <= x <= n * n</code> except two of them there is exatly one pair of <code>i, j</code> that <code>0 <= i, j <= n - 1</code> and <code>grid[i][j] == x</code>.
