## [4. Median of Two Sorted Arrays](https://leetcode.com/problems/median-of-two-sorted-arrays/)

<code>Hard</code>

<br>

Given two sorted arrays <code>nums1</code> and <code>nums2</code> of size <code>m</code> and <code>n</code> respectively, return __the median__ of the two sorted arrays.

The overall run time complexity should be <code>O(log (m+n))</code>.

<br>

#### Example 1:

> __Input:__ nums1 = [1,3], nums2 = [2]  
> __Output:__ 2.00000  
> __Explanation:__ merged array = [1,2,3] and median is 2.  

#### Example 2:

> __Input:__ nums1 = [1,2], nums2 = [3,4]  
> __Output:__ 2.50000  
> __Explanation:__ merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5.  

<br>

#### Constraints:

- <code>nums1.length == m</code>
- <code>nums2.length == n</code>
- <code>0 <= m <= 1000</code>
- <code>0 <= n <= 1000</code>
- <code>1 <= m + n <= 2000</code>
- <code>-10<sup>6</sup> <= nums1[i], nums2[i] <= 10<sup>6</sup></code>
