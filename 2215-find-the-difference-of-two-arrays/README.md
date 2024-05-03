## [2215. Find the Difference of Two Arrays](https://leetcode.com/problems/find-the-difference-of-two-arrays)

<code>Easy</code> <code>Array</code> <code>Hash Table</code>

<br>

Given two __0-indexed__ integer arrays <code>nums1</code> and <code>nums2</code>, return *a list* <code>answer</code> *of size* <code>2</code> *where*:

- <code>answer[0]</code> *is a list of all __distinct__ integers in* <code>nums1</code> *which are __not__ present in* <code>nums2</code>.
- <code>answer[1]</code> *is a list of all __distinct__ integers in* <code>nums2</code> *which are __not__ present in* <code>nums1</code>.

__Note__ that the integers in the lists may be returned in __any__ order.

<br>

#### Example 1:

> __Input:__ nums1 = [1,2,3], nums2 = [2,4,6]
> 
> __Output:__ [[1,3],[4,6]]
> 
> __Explanation:__  
> For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].  
> For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].  

#### Example 2:

> __Input:__ nums1 = [1,2,3,3], nums2 = [1,1,2,2]
> 
> __Output:__ [[3],[]]
> 
> __Explanation:__  
> For nums1, nums1[2] and nums1[3] are not present in nums2. Since nums1[2] == nums1[3], their value is only included once and answer[0] = [3].  
> Every integer in nums2 is present in nums1. Therefore, answer[1] = [].  

<br>

#### Constraints:

- <code>1 <= nums1.length, nums2.length <= 1000</code>
- <code>-1000 <= nums1[i], nums2[i] <= 1000</code>
