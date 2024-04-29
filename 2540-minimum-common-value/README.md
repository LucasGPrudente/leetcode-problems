## [2540. Minimum Common Value](https://leetcode.com/problems/minimum-common-value)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>Two Pointers</code> <code>Binary Search</code>

<br>

Given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in non-decreasing order, return *the __minimum integer common__ to both arrays*. If there is no common integer amongst <code>nums1</code> and <code>nums2</code>, return <code>-1</code>.

Note that an integer is said to be __common__ to <code>nums1</code> and <code>nums2</code> if both arrays have __at least one__ occurrence of that integer.

<br>

#### Example 1:

> __Input:__ nums1 = [1,2,3], nums2 = [2,4]
>   
> __Output:__ 2
> 
> __Explanation:__ The smallest element common to both arrays is 2, so we return 2.  

#### Example 2:

> __Input:__ nums1 = [1,2,3,6], nums2 = [2,3,4,5]
> 
> __Output:__ 2
> 
> __Explanation:__ There are two common elements in the array 2 and 3 out of which 2 is the smallest, so 2 is returned.  

<br>

#### Constraints:

- <code>1 <= nums1.length, nums2.length <= 10<sup>5</sup></code>
- <code>1 <= nums1[i], nums2[j] <= 10<sup>9</sup></code>
- Both <code>nums1</code> and <code>nums2</code> are sorted in __non-decreasing__ order.
