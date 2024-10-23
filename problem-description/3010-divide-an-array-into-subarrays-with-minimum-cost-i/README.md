## [3010. Divide an Array Into Subarrays With Minimum Cost I](https://leetcode.com/problems/divide-an-array-into-subarrays-with-minimum-cost-i)

<code>Easy</code> <code>Array</code> <code>Sorting</code> <code>Enumeration</code>

<br>

You are given an array of integers <code>nums</code> of length <code>n</code>.

The __cost__ of an array is the value of its __first__ element. For example, the cost of <code>[1,2,3]</code> is <code>1</code> while the cost of <code>[3,4,1]</code> is <code>3</code>.

You need to divide <code>nums</code> into <code>3</code> __disjoint contiguous__ subarrays.

Return *the __minimum__ possible __sum__ of the cost of these subarrays.*

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,12]
>
> __Output:__ 6
>
> __Explanation:__ The best possible way to form 3 subarrays is: [1], [2], and [3,12] at a total cost of 1 + 2 + 3 = 6.
> The other possible ways to form 3 subarrays are:
> - [1], [2,3], and [12] at a total cost of 1 + 2 + 12 = 15.
> - [1,2], [3], and [12] at a total cost of 1 + 3 + 12 = 16.

#### Example 2:

> __Input:__ nums = [5,4,3]
>
> __Output:__ 12
>
> __Explanation:__ The best possible way to form 3 subarrays is: [5], [4], and [3] at a total cost of 5 + 4 + 3 = 12.
It can be shown that 12 is the minimum cost achievable.

#### Example 3:

> __Input:__ nums = [10,3,1,1]
>
> __Output:__ 12
>
> __Explanation:__ The best possible way to form 3 subarrays is: [10,3], [1], and [1] at a total cost of 10 + 1 + 1 = 12.
It can be shown that 12 is the minimum cost achievable.

<br>

#### Constraints:

- <code>3 <= n <= 50</code>
- <code>1 <= nums[i] <= 50</code>