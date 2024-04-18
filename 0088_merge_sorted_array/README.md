## [88. Merge Sorted Array](https://leetcode.com/problems/merge-sorted-array/)

<code>Easy</code> <code>Array</code> <code>Two Pointers</code> <code>Sorting</code>

<br>

You are given two integer arrays <code>nums1</code> and <code>nums2</code>, sorted in __non-decreasing order__, and two integers <code>m</code> and <code>n</code>, representing the number of elements 
in <code>nums1</code> and <code>nums2</code> respectively.

__Merge__ <code>nums1</code> and <code>nums2</code> into a single array sorted in __non-decreasing__ order.

The final sorted array should not be returned by the function, but instead be *stored inside the array* <code>nums1</code>. To accommodate this, <code>nums1</code> has a length of <code>m + n</code>, 
where the first <code>m</code> elements denote the elements that should be merged, and the last <code>n</code> elements are set to <code>0</code> and should be ignored. <code>nums2</code> has a
length of <code>n</code>.

<br>

#### Example 1:

> __Input:__ nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
> 
> __Output:__ [1,2,2,3,5,6]
> 
> __Explanation:__ The arrays we are merging are [1,2,3] and [2,5,6].  
> The result of the merge is [1,2,2,3,5,6] with the underlined elements coming from nums1.  

#### Example 2:

> __Input:__ nums1 = [1], m = 1, nums2 = [], n = 0
>  
> __Output:__ [1]
> 
> __Explanation:__ The arrays we are merging are [1] and [].  
> The result of the merge is [1].  

#### Example 3:

> __Input:__ nums1 = [0], m = 0, nums2 = [1], n = 1
> 
> __Output:__ [1]
> 
> __Explanation:__ The arrays we are merging are [] and [1].  
> The result of the merge is [1].  
> Note that because m = 0, there are no elements in nums1. The 0 is only there to ensure the merge result can fit in nums1.  

<br>

#### Constraints:

- <code>nums1.length == m + n</code>
- <code>nums2.length == n</code>
- <code>0 <= m, n <= 200</code>
- <code>1 <= m + n <= 200</code>
- <code>-10<sup>9</sup> <= nums1[i], nums2[j] <= 10<sup>9</sup></code>
