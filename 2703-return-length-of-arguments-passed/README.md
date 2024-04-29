## [2703. Return Length of Arguments Passed](https://leetcode.com/problems/return-length-of-arguments-passed)

<code>Easy</code>

<br>

Write a function <code>argumentsLength</code> that returns the count of arguments passed to it.

<br>

#### Example 1:

> __Input:__ args = [5]
> 
> __Output:__ 1
> 
> __Explanation:__
> argumentsLength(5); // 1  
>   
> One value was passed to the function so it should return 1.  

#### Example 2:

> __Input:__ args = [{}, null, "3"]
> 
> __Output:__ 3
> 
> __Explanation:__   
> argumentsLength({}, null, "3"); // 3  
>   
> Three values were passed to the function so it should return 3.  

<br>

#### Constraints:

- <code>args</code> is a valid JSON array
- <code>0 <= args.length <= 100</code>
