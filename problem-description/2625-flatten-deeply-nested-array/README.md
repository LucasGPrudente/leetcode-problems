## [2625. Flatten Deeply Nested Array](https://leetcode.com/problems/flatten-deeply-nested-array)

<code>Medium</code>

<br>

Given a __multi-dimensional__ array <code>arr</code> and a depth <code>n</code>, return a __flattened__ version of that array.

A __multi-dimensional__ array is a recursive data structure that contains integers or other __multi-dimensional__ arrays.

A __flattened__ array is a version of that array with some or all of the sub-arrays removed and replaced with the actual elements in that sub-array. This flattening operation should only be done if the current depth of nesting is less than <code>n</code>. The depth of the elements in the first array are considered to be <code>0</code>.

Please solve it without the built-in <code>Array.flat</code> method.

<br>

#### Example 1:

> __Input__  
> arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
> n = 0  
>   
> __Output__  
> [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
>   
> __Explanation__  
> Passing a depth of n=0 will always result in the original array. This is because the smallest possible depth of a subarray (0) is not less than n=0. Thus, no subarray should be flattened.   

#### Example 2:

> __Input__  
> arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
> n = 1  
>   
> __Output__  
> [1, 2, 3, 4, 5, 6, 7, 8, [9, 10, 11], 12, 13, 14, 15]  
>   
> __Explanation__  
> The subarrays starting with 4, 7, and 13 are all flattened. This is because their depth of 0 is less than 1. However [9, 10, 11] remains unflattened because its depth is 1.  

#### Example 3:

> __Input__  
> arr = [[1, 2, 3], [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]]  
> n = 2  
>   
> __Output__  
> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]  
>   
> __Explanation__  
> The maximum depth of any subarray is 1. Thus, all of them are flattened.  

<br>

#### Constraints:

- <code>0 <= count of numbers in arr <= 10<sup>5</sup></code>
- <code>0 <= count of subarrays in arr <= 10<sup>5</sup></code>
- <code>maxDepth <= 1000</code>
- <code>-1000 <= each number <= 1000</code>
- <code>0 <= n <= 1000</code>
