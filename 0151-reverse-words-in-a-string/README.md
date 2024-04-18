## [151. Reverse Words in a String](https://leetcode.com/problems/reverse-words-in-a-string/)

<code>Medium</code> <code>Two Pointers</code> <code>String</code>

<br>

Given an input string <code>s</code>, reverse the order of the __words__.

A __word__ is defined as a sequence of non-space characters. The __words__ in <code>s</code> will be separated by at least one space.

Return *a string of the words in reverse order concatenated by a single space*.

__Note__ that <code>s</code> may contain leading or trailing spaces or multiple spaces between two words. The returned string should only have a single space separating the words. Do not include any extra spaces.

<br>

#### Example 1:

> __Input:__ s = "the sky is blue"
> 
> __Output:__ "blue is sky the"  

#### Example 2:

> __Input:__ s = "  hello world  "
>  
> __Output:__ "world hello"
> 
> __Explanation:__ Your reversed string should not contain leading or trailing spaces.  

#### Example 3:

> __Input:__ s = "a good   example"
> 
> __Output:__ "example good a"
> 
> __Explanation:__ You need to reduce multiple spaces between two words to a single space in the reversed string.  

<br>

#### Constraints:

- <code>1 <= s.length <= 10<sup>4</sup></code>
- <code>s</code> contains English letters (upper-case and lower-case), digits, and spaces <code>' '</code>.
- There is at __least one word__ in <code>s</code>.
