## [2000. Reverse Prefix of Word](https://leetcode.com/problems/reverse-prefix-of-word)

<code>Easy</code> <code>Two Pointers</code> <code>String</code>

<br>

Given a __0-indexed__ string <code>word</code> and a character <code>ch</code>, __reverse__ the segment of <code>word</code> that starts at index <code>0</code> and ends at the index of the __first occurrence__ of <code>ch</code> __(inclusive)__. If the character <code>ch</code> does not exist in <code>word</code>, do nothing.

- For example, if <code>word = "abcdefd"</code> and <code>ch = "d"</code>, then you should __reverse__ the segment that starts at <code>0</code> and ends at <code>3</code> __(inclusive)__. The resulting string will be <code>"dcbaefd"</code>.

Return *the resulting string*. 

<br>

#### Example 1:

> __Input:__ word = "abcdefd", ch = "d"
> 
> __Output:__ "dcbaefd"
>  
> __Explanation:__ The first occurrence of "d" is at index 3.   
> Reverse the part of word from 0 to 3 (inclusive), the resulting string is "dcbaefd".  

#### Example 2:

> __Input:__ word = "xyxzxe", ch = "z"
> 
> __Output:__ "zxyxxe"
> 
> __Explanation:__ The first and only occurrence of "z" is at index 3.
> Reverse the part of word from 0 to 3 (inclusive), the resulting string is "zxyxxe".  

#### Example 3:

> __Input:__ word = "abcd", ch = "z"
> 
> __Output:__ "abcd"
> 
> __Explanation:__ "z" does not exist in word.  
> You should not do any reverse operation, the resulting string is "abcd".  

<br>

#### Constraints:

- <code>1 <= word.length <= 250</code>
- <code>word</code> consists of lowercase English letters.
- <code>ch</code> is a lowercase English letter.
