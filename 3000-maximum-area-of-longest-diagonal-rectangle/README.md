## [3000. Maximum Area of Longest Diagonal Rectangle](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/)

<code>Easy</code> <code>Array</code>

<br>

You are given a 2D __0-indexed__ integer array <code>dimensions</code>.

For all indices <code>i</code>, <code>0 <= i < dimensions.length</code>, <code>dimensions[i][0]</code> represents the length and <code>dimensions[i][1]</code> represents the width of the rectangle <code>i</code>.

Return *the area of the rectangle having the __longest__ diagonal. If there are multiple rectangles with the longest diagonal, return the area of the rectangle having the __maximum__ area*.

<br>

#### Example 1:

> __Input:__ dimensions = [[9,3],[8,6]]  
> 
> __Output:__ 48  
> 
> __Explanation:__   
> For index = 0, length = 9 and width = 3. Diagonal length = sqrt(9 * 9 + 3 * 3) = sqrt(90) ≈ 9.487.  
> For index = 1, length = 8 and width = 6. Diagonal length = sqrt(8 * 8 + 6 * 6) = sqrt(100) = 10.  
> So, the rectangle at index 1 has a greater diagonal length therefore we return area = 8 * 6 = 48.  

#### Example 2:

> __Input:__ dimensions = [[3,4],[4,3]]  
> 
> __Output:__ 12
> 
> __Explanation:__ Length of diagonal is the same for both which is 5, so maximum area = 12.  

<br>

#### Constraints:

- <code>1 <= dimensions.length <= 100</code>
- <code>dimensions[i].length == 2</code>
- <code>1 <= dimensions[i][0], dimensions[i][1] <= 100</code>
