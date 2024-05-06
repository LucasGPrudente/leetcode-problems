## [2634. Filter Elements from Array](https://leetcode.com/problems/filter-elements-from-array)

<code>Easy</code>

<br>

Given an integer array <code>arr</code> and a filtering function <code>fn</code>, return a filtered array <code>filteredArr</code>.

The <code>fn</code> function takes one or two arguments:

- <code>arr[i]</code> - number from the <code>arr</code>
- <code>i</code> - index of <code>arr[i]</code>
  
<code>filteredArr</code> should only contain the elements from the <code>arr</code> for which the expression <code>fn(arr[i], i)</code> evaluates to a __truthy__ value. A __truthy__ value is a value where <code>Boolean(value)</code>  returns <code>true</code>.

Please solve it without the built-in <code>Array.filter</code> method.

<br>

#### Example 1:

> __Input:__ arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
> 
> __Output:__ [20,30]
> 
> __Explanation:__
> const newArray = filter(arr, fn); // [20, 30]  
> The function filters out values that are not greater than 10  

#### Example 2:

> __Input:__ arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
> 
> __Output:__ [1]
> 
> __Explanation:__  
> fn can also accept the index of each element  
> In this case, the function removes elements not at index 0  

#### Example 3:

> __Input:__ arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
> 
> __Output:__ [-2,0,1,2]
> 
> __Explanation:__
> Falsey values such as 0 should be filtered out  

<br>

#### Constraints:

- <code>0 <= arr.length <= 1000</code>
- <code>-10<sup>9</sup> <= arr[i] <= 10<sup>9</sup></code>
