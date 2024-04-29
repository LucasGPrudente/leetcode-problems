## [2619. Array Prototype Last](https://leetcode.com/problems/array-prototype-last)

<code>Easy</code>

<br>

Write code that enhances all arrays such that you can call the <code>array.last()</code> method on any array and it will return the last element. If there are no elements in the array, it should return <code>-1</code>.

You may assume the array is the output of <code>JSON.parse</code>.

<br>

#### Example 1:

> __Input:__ nums = [null, {}, 3]
> 
> __Output:__ 3
> 
> __Explanation:__ Calling nums.last() should return the last element: 3.  

#### Example 2:

> __Input:__ nums = []
>
> __Output:__ -1
> 
> __Explanation:__ Because there are no elements, return -1.  

<br>

#### Constraints:

- <code>arr</code> is a valid JSON array
- <code>0 <= arr.length <= 1000</code>
