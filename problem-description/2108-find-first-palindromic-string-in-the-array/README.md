## [2108. Find First Palindromic String in the Array](https://leetcode.com/problems/find-first-palindromic-string-in-the-array)

<code>Easy</code> <code>Array</code> <code>Two Pointers</code> <code>String</code>

<br>

Given an array of strings <code>words</code>, return *the first __palindromic__ string in the array*. If there is no such string, return *an __empty string__* <code>""</code>.

A string is __palindromic__ if it reads the same forward and backward.

<br>

#### Example 1:

> __Input:__ words = ["abc","car","ada","racecar","cool"]
> 
> __Output:__ "ada"
> 
> __Explanation:__ The first string that is palindromic is "ada".  
> Note that "racecar" is also palindromic, but it is not the first.  

#### Example 2:

> __Input:__ words = ["notapalindrome","racecar"]
> 
> __Output:__ "racecar"
> 
> __Explanation:__ The first and only string that is palindromic is "racecar".  

#### Example 3:

> __Input:__ words = ["def","ghi"]
> 
> __Output:__ ""
> 
> __Explanation:__ There are no palindromic strings, so the empty string is returned.  

<br>

#### Constraints:

- <code>1 <= words.length <= 100</code>
- <code>1 <= words[i].length <= 100</code>
- <code>words[i]</code> consists only of lowercase English letters.
