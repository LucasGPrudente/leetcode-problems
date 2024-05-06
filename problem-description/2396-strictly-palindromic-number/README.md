## [2396. Strictly Palindromic Number](https://leetcode.com/problems/strictly-palindromic-number)

<code>Medium</code> <code>Math</code> <code>Two Pointers</code> <code>Brainteaser</code>

<br>

An integer <code>n</code> is __strictly palindromic__ if, for __every__ base <code>b</code> between <code>2</code> and <code>n - 2</code> __(inclusive)__, the string representation of the integer <code>n</code> in base <code>b</code> is __palindromic__.

Given an integer <code>n</code>, return <code>true</code> *if* <code>n</code> *is __strictly palindromic__ and* <code>false</code> *otherwise*.

A string is __palindromic__ if it reads the same forward and backward.

<br>

#### Example 1:

> __Input:__ n = 9
> 
> __Output:__ false
> 
> __Explanation:__ In base 2: 9 = 1001 (base 2), which is palindromic.  
> In base 3: 9 = 100 (base 3), which is not palindromic.  
> Therefore, 9 is not strictly palindromic so we return false.  
> Note that in bases 4, 5, 6, and 7, n = 9 is also not palindromic.  

#### Example 2:

> __Input:__ n = 4
> 
> __Output:__ false
> 
> __Explanation:__ We only consider base 2: 4 = 100 (base 2), which is not palindromic.  
> Therefore, we return false.  

<br>

#### Constraints:

<code>4 <= n <= 10<sup>5</sup></code>
