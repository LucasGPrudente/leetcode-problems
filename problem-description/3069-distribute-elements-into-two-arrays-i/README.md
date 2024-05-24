## [3069. Distribute Elements Into Two Arrays I](https://leetcode.com/problems/distribute-elements-into-two-arrays-i)

<code>Easy</code> <code>Array</code> <code>Simulation</code>

<br>

You are given a __1-indexed__ array of __distinct__ integers <code>nums</code> of length <code>n</code>.

You need to distribute all the elements of <code>nums</code> between two arrays <code>arr1</code> and <code>arr2</code> using n operations. In the first operation, append <code>nums[1]</code> to <code>arr1</code>. In the second operation, append <code>nums[2]</code> to <code>arr2</code>. Afterwards, in the <code>i<sup>th</sup></code> operation:

- If the last element of <code>arr1</code> is __greater__ than the last element of <code>arr2</code>, append <code>nums[i]</code> to <code>arr1</code>. Otherwise, append <code>nums[i]</code> to <code>arr2</code>.

The array <code>result</code> is formed by concatenating the arrays <code>arr1</code> and <code>arr2</code>. For example, if <code>arr1 == [1,2,3]</code> and <code>arr2 == [4,5,6]</code>, then <code>result = [1,2,3,4,5,6]</code>.

Return *the array* <code>result</code>.

<br>

#### Example 1:

> __Input:__ nums = [2,1,3]
> 
> __Output:__ [2,3,1]
> 
> __Explanation:__ After the first 2 operations, arr1 = [2] and arr2 = [1].  
> In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (2 > 1), append nums[3] to arr1.  
> After 3 operations, arr1 = [2,3] and arr2 = [1].  
> Hence, the array result formed by concatenation is [2,3,1].  

#### Example 2:

> __Input:__ nums = [5,4,3,8]
> 
> __Output:__ [5,3,4,8]
> 
> __Explanation:__ After the first 2 operations, arr1 = [5] and arr2 = [4].  
> In the 3rd operation, as the last element of arr1 is greater than the last element of arr2 (5 > 4), append nums[3] to arr1, hence arr1 becomes [5,3].  
> In the 4th operation, as the last element of arr2 is greater than the last element of arr1 (4 > 3), append nums[4] to arr2, hence arr2 becomes [4,8].  
> After 4 operations, arr1 = [5,3] and arr2 = [4,8].  
> Hence, the array result formed by concatenation is [5,3,4,8].  
 
<br>

#### Constraints:

- <code>3 <= n <= 50</code>
- <code>1 <= nums[i] <= 100</code>
- All elements in <code>nums</code> are distinct.
