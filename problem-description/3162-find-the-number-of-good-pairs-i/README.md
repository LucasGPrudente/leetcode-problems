## [3162. Find the Number of Good Pairs I](https://leetcode.com/problems/find-the-number-of-good-pairs-i)

<code>Easy</code> <code>Array</code> <code>Hash Table</code>

<br>

You are given 2 integer arrays <code>nums1</code> and <code>nums2</code> of lengths <code>n</code> and <code>m</code> respectively. You are also given a __positive__ integer <code>k</code>.

A pair <code>(i, j)</code> is called __good__ if <code>nums1[i]</code> is divisible by <code>nums2[j] * k</code> (<code>0 <= i <= n - 1</code>, <code>0 <= j <= m - 1</code>).

Return the total number of __good__ pairs.

<br>

#### Example 1:

> __Input:__ nums1 = [1,3,4], nums2 = [1,3,4], k = 1
>   
> __Output:__ 5  
>   
> __Explanation:__ The 5 good pairs are <code>(0, 0)</code>, <code>(1, 0)</code>, <code>(1, 1)</code>, <code>(2, 0)</code>, and <code>(2, 2)</code>.  

#### Example 2:

> __Input:__ nums1 = [1,2,4,12], nums2 = [2,4], k = 3  
>   
> __Output:__ 2  
>   
> __Explanation:__ The 2 good pairs are <code>(3, 0)</code> and <code>(3, 1)</code>.  

<br> 

#### Constraints:

- <code>1 <= n, m <= 50</code>
- <code>1 <= nums1[i], nums2[j] <= 50</code>
- <code>1 <= k <= 50</code>
