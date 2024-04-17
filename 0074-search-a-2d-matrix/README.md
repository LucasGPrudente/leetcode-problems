## [74. Search a 2D Matrix](https://leetcode.com/problems/search-a-2d-matrix/)

<code>Medium</code> <code>Array</code> <code>Binary Search</code> <code>Matrix</code>

<br>

You are given an <code>m x n</code> integer matrix <code>matrix</code> with the following two properties:

- Each row is sorted in non-decreasing order.  
- The first integer of each row is greater than the last integer of the previous row.

Given an integer <code>target</code>, return <code>true</code> *if* <code>target</code> *is in* <code>matrix</code> *or* <code>false</code> *otherwise*.

You must write a solution in <code>O(log(m * n))</code> time complexity.

<br>

#### Example 1:

![image](https://github.com/LucasGPrudente/leetcode_problems/assets/165199182/8fb8ef98-bc07-497a-afef-f34b52af4178)
> __Input:__ matrix = [[1,3,5,7] , [10,11,16,20] , [23,30,34,60]], target = 3
> 
> __Output:__ true  

#### Example 2:

![image](https://github.com/LucasGPrudente/leetcode_problems/assets/165199182/50e85ffc-85d3-408a-9f79-e0824a36fc82)
> __Input:__ matrix = [[1,3,5,7] , [10,11,16,20] , [23,30,34,60]], target = 13
> 
> __Output:__ false  

<br>

#### Constraints:

- <code>m == matrix.length</code>
- <code>n == matrix[i].length</code>
- <code>1 <= m, n <= 100</code>
- <code>-10<sup>4</sup> <= matrix[i][j], target <= 10<sup>4</sup></code>
