## [3131. Find the Integer Added to Array I](https://leetcode.com/problems/find-the-integer-added-to-array-i)

<code>Easy</code> <code>Array</code>

<br>

You are given two arrays of equal length, <code>nums1</code> and <code>nums2</code>.

Each element in <code>nums1</code> has been increased (or decreased in the case of negative) by an integer, represented by the variable <code>x</code>.

As a result, <code>nums1</code> becomes __equal__ to <code>nums2</code>. Two arrays are considered __equal__ when they contain the same integers with the same frequencies.

Return the integer <code>x</code>.

<br>

#### Example 1:

> __Input:__ nums1 = [2,6,4], nums2 = [9,7,5]  
>   
> __Output:__ 3  
>   
> __Explanation:__ The integer added to each element of <code>nums1</code> is 3.  

#### Example 2:

> __Input:__ nums1 = [10], nums2 = [5]  
>   
> __Output:__ -5  
>   
> __Explanation:__ The integer added to each element of <code>nums1</code> is -5.  

#### Example 3:

> __Input:__ nums1 = [1,1,1,1], nums2 = [1,1,1,1]  
>   
> __Output:__ 0  
>   
> __Explanation:__ The integer added to each element of <code>nums1</code> is 0.  

<br> 

#### Constraints:

- <code>1 <= nums1.length == nums2.length <= 100</code>
- <code>0 <= nums1[i], nums2[i] <= 1000</code>
- The test cases are generated in a way that there is an integer <code>x</code> such that <code>nums1</code> can become equal to <code>nums2</code> by adding <code>x</code> to each element of <code>nums1</code>.
