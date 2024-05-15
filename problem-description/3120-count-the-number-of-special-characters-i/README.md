## [3120. Count the Number of Special Characters I](https://leetcode.com/problems/count-the-number-of-special-characters-i)

<code>Easy</code> <code>Hash Table</code> <code>String</code>

<br>

You are given a string <code>word</code>. A letter is called __special__ if it appears __both__ in lowercase and uppercase in <code>word</code>.

Return the number of __special__ letters in <code>word</code>.

<br>

#### Example 1:

> __Input:__ word = "aaAbcBC"  
>   
> __Output:__ 3  
>   
> __Explanation:__ The special characters in <code>word</code> are <code>'a'</code>, <code>'b'</code>, and <code>'c'</code>.  

#### Example 2:

> __Input:__ word = "abc"  
>   
> __Output:__ 0  
>   
> __Explanation:__ No character in <code>word</code> appears in uppercase.  

#### Example 3:

> __Input:__ word = "abBCab"  
>   
> __Output:__ 1  
> 
> __Explanation:__ The only special character in <code>word</code> is <code>'b'</code>.  

<br>

Constraints:

- <code>1 <= word.length <= 50</code>
- <code>word</code> consists of only lowercase and uppercase English letters.
