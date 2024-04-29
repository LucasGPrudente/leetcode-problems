## [2677. Chunk Array](https://leetcode.com/problems/chunk-array)

<code>Easy</code>

<br>

Given an array <code>arr</code> and a chunk size <code>size</code>, return a __chunked__ array.

A __chunked__ array contains the original elements in <code>arr</code>, but consists of subarrays each of length <code>size</code>. The length of the last subarray may be less than <code>size</code> if <code>arr.length</code> is not evenly divisible by <code>size</code>.

You may assume the array is the output of <code>JSON.parse</code>. In other words, it is valid JSON.

Please solve it without using lodash's <code>_.chunk</code> function.

<br>

#### Example 1:

> __Input:__ arr = [1,2,3,4,5], size = 1
> 
> __Output:__ [[1],[2],[3],[4],[5]]
> 
> __Explanation:__ The arr has been split into subarrays each with 1 element.  

#### Example 2:

> __Input:__ arr = [1,9,6,3,2], size = 3
> 
> __Output:__ [[1,9,6],[3,2]]
> 
> __Explanation:__ The arr has been split into subarrays with 3 elements. However, only two elements are left for the 2nd subarray.  

#### Example 3:

> __Input:__ arr = [8,5,3,2,6], size = 6
> 
> __Output:__ [[8,5,3,2,6]]
> 
> __Explanation:__ Size is greater than arr.length thus all elements are in the first subarray.  

#### Example 4:

> __Input:__ arr = [], size = 1
> 
> __Output:__ []
> 
> __Explanation:__ There are no elements to be chunked so an empty array is returned.  

<br>

#### Constraints:

- <code>arr</code> is a valid JSON array
- <code>2 <= JSON.stringify(arr).length <= 10<sup>5</sup></code>
- <code>1 <= size <= arr.length + 1</code>
