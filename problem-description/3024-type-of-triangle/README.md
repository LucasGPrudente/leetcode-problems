## [3024. Type of Triangle](https://leetcode.com/problems/type-of-triangle)

<code>Easy</code> <code>Array</code> <code>Math</code> <code>Sorting</code>

<br>

You are given a __0-indexed__ integer array <code>nums</code> of size <code>3</code> which can form the sides of a triangle.

- A triangle is called __equilateral__ if it has all sides of equal length.
- A triangle is called __isosceles__ if it has exactly two sides of equal length.
- A triangle is called __scalene__ if all its sides are of different lengths.

Return *a string representing the type of triangle that can be formed or <code>"none"</code> if it __cannot__ form a triangle*.

<br>

#### Example 1:

> __Input:__ nums = [3,3,3]
>  
> __Output:__ "equilateral"
>  
> __Explanation:__ Since all the sides are of equal length, therefore, it will form an equilateral triangle.  

#### Example 2:

> __Input:__ nums = [3,4,5]
>  
> __Output:__ "scalene"
> 
> __Explanation:__   
> nums[0] + nums[1] = 3 + 4 = 7, which is greater than nums[2] = 5.  
> nums[0] + nums[2] = 3 + 5 = 8, which is greater than nums[1] = 4.  
> nums[1] + nums[2] = 4 + 5 = 9, which is greater than nums[0] = 3.   
> Since the sum of the two sides is greater than the third side for all three cases, therefore, it can form a triangle.  
> As all the sides are of different lengths, it will form a scalene triangle.  
 
<br>

#### Constraints:

- <code>nums.length == 3</code>
- <code>1 <= nums[i] <= 100</code>
