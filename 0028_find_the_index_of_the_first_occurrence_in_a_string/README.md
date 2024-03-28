## [28. Find the Index of the First Occurrence in a String](https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/)

<code>Easy</code>

<br>

Given two strings <code>needle</code> and <code>haystack</code>, return the index of the first occurrence of <code>needle</code> in <code>haystack</code>, or <code>-1</code> if <code>needle</code> is not part of <code>haystack</code>. 

<br>

#### Example 1:

> __Input:__ haystack = "sadbutsad", needle = "sad"  
> __Output:__ 0  
> __Explanation:__ "sad" occurs at index 0 and 6.  
> The first occurrence is at index 0, so we return 0.  

#### Example 2:

> __Input:__ haystack = "leetcode", needle = "leeto"  
> __Output:__ -1  
> __Explanation:__ "leeto" did not occur in "leetcode", so we return -1.  

<br>

#### Constraints:

- <code>1 <= haystack.length, needle.length <= 10<sup>4</sup></code>
- <code>haystack</code> and <code>needle</code> consist of only lowercase English characters.
