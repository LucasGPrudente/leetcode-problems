## [125. Valid Palindrome](https://leetcode.com/problems/valid-palindrome)

<code>Easy</code> <code>Two Pointers</code> <code>String</code>

<br>

A phrase is a __palindrome__ if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string <code>s</code>, return <code>true</code> *if it is a __palindrome__, or* <code>false</code> *otherwise*.

<br>

#### Example 1:

> __Input:__ s = "A man, a plan, a canal: Panama"
> 
> __Output:__ true
> 
> __Explanation:__ "amanaplanacanalpanama" is a palindrome.  

#### Example 2:

> __Input:__ s = "race a car"
> 
> __Output:__ false
> 
> __Explanation:__ "raceacar" is not a palindrome.  

#### Example 3:

> __Input:__ s = " "
>  
> __Output:__ true
> 
> __Explanation:__ s is an empty string "" after removing non-alphanumeric characters.  
> Since an empty string reads the same forward and backward, it is a palindrome.  
 
<br>

#### Constraints:

- <code>1 <= s.length <= 2 * 10<sup>5</sup></code>
- <code>s</code> consists only of printable ASCII characters.
