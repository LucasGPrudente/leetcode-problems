## [38. Count and Say](https://leetcode.com/problems/count-and-say/)

<code>Medium</code> <code>String</code>

<br>

The __count-and-say__ sequence is a sequence of digit strings defined by the recursive formula:

- <code>countAndSay(1) = "1"</code>
- <code>countAndSay(n)</code> is the way you would "say" the digit string from <code>countAndSay(n-1)</code>, which is then converted into a different digit string.

To determine how you "say" a digit string, split it into the __minimal__ number of substrings such that each substring contains exactly __one__ unique digit. Then for each substring, say the number of digits, then say the digit. Finally, concatenate every said digit.

![image](https://github.com/LucasGPrudente/leetcode-problems/assets/165199182/21ce01f7-8f26-40de-b129-43982c2daeca)

For example, the saying and conversion for digit string <code>"3322251"</code>:

Given a positive integer <code>n</code>, return *the* <code>n<sup>th</sup></code> *term of the __count-and-say__ sequence*.

<br>

#### Example 1:

> __Input:__ n = 1
> 
> __Output:__ "1"
> 
> __Explanation:__ This is the base case.  

#### Example 2:

> __Input:__ n = 4
> 
> __Output:__ "1211"
> 
> __Explanation:__  
> countAndSay(1) = "1"  
> countAndSay(2) = say "1" = one 1 = "11"  
> countAndSay(3) = say "11" = two 1's = "21"  
> countAndSay(4) = say "21" = one 2 + one 1 = "12" + "11" = "1211"  

<br>

#### Constraints:

- <code>1 <= n <= 30</code>
