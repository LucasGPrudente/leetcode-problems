## [3136. Valid Word](https://leetcode.com/problems/valid-word)

<code>Easy</code> <code>String</code>

<br>

A word is considered __valid__ if:

- It contains a __minimum__ of 3 characters.
- It contains only digits (0-9), and English letters (uppercase and lowercase).
- It includes __at least__ one __vowel__.
- It includes __at least__ one __consonant__.

You are given a string <code>word</code>.

Return <code>true</code> if <code>word</code> is valid, otherwise, return <code>false</code>.

<br>

#### Notes:

- <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, <code>'u'</code>, and their uppercases are __vowels__.
- A __consonant__ is an English letter that is not a vowel.
 
<br>

#### Example 1:

> __Input:__ word = "234Adas"  
>   
> __Output:__ true  
>   
> __Explanation:__ This word satisfies the conditions.  

#### Example 2:

> __Input:__ word = "b3"  
>   
> __Output:__ false  
>   
> __Explanation:__ The length of this word is fewer than 3, and does not have a vowel.  

#### Example 3:

> __Input:__ word = "a3$e"  
>   
> __Output:__ false  
>   
> __Explanation:__ This word contains a <code>'$'</code> character and does not have a consonant.  

<br>

#### Constraints:

- <code>1 <= word.length <= 20</code>
- <code>word</code> consists of English uppercase and lowercase letters, digits, <code>'@'</code>, <code>'#'</code>, and <code>'$'</code>.
