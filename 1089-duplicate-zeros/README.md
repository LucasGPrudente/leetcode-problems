## [1089. Duplicate Zeros](https://leetcode.com/problems/duplicate-zeros)

<code>Easy</code> <code>Array</code> <code>Two Pointers</code>

<br>

Given a fixed-length integer array <code>arr</code>, duplicate each occurrence of zero, shifting the remaining elements to the right.

__Note__ that elements beyond the length of the original array are not written. Do the above modifications to the input array in place and do not return anything.

<br>

#### Example 1:

> __Input:__ arr = [1,0,2,3,0,4,5,0]
> 
> __Output:__ [1,0,0,2,3,0,0,4]
> 
> __Explanation:__ After calling your function, the input array is modified to: [1,0,0,2,3,0,0,4]  

#### Example 2:

> __Input:__ arr = [1,2,3]
> 
> __Output:__ [1,2,3]
> 
> __Explanation:__ After calling your function, the input array is modified to: [1,2,3]  
 
<br>

#### Constraints:

- <code>1 <= arr.length <= 10<sup>4</sup></code>
- <code>0 <= arr[i] <= 9</code>
