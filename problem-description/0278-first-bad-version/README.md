## [278. First Bad Version](https://leetcode.com/problems/first-bad-version)

<code>Easy</code> <code>Binary Search</code> <code>Interactive</code>

<br>

You are a product manager and currently leading a team to develop a new product. Unfortunately, the latest version of your product fails the quality check. Since each version is developed based on the previous version, all the versions after a bad version are also bad.

Suppose you have <code>n</code> versions <code>[1, 2, ..., n]</code> and you want to find out the first bad one, which causes all the following ones to be bad.

You are given an API <code>bool isBadVersion(version)</code> which returns whether version is bad. Implement a function to find the first bad <code>version</code>. You should minimize the number of calls to the API.

<br>

#### Example 1:

> __Input:__ n = 5, bad = 4
>
> __Output:__ 4
>
> __Explanation:__
call isBadVersion(3) -> false
call isBadVersion(5) -> true
call isBadVersion(4) -> true
Then 4 is the first bad version.

#### Example 2:

> __Input:__ n = 1, bad = 1
>
> __Output:__ 1

<br>

#### Constraints:

- <code>1 <= bad <= n <= 2<sup>31</sup> - 1</code>