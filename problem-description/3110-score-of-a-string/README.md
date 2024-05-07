## [3110. Score of a String](https://leetcode.com/problems/score-of-a-string/description/)

<code>Easy</code> <code>String</code>

<br>

You are given a string s. The __score__ of a string is defined as the sum of the absolute difference between the __ASCII__ values of adjacent characters.

Return the __score__ of s.

<br>

#### Example 1:

> __Input:__ s = "hello"  
>   
> __Output:__ 13  
>   
> __Explanation:__  
> The __ASCII__ values of the characters in <code>s</code> are: <code>'h' = 104</code>, <code>'e' = 101</code>, <code>'l' = 108</code>, <code>'o' = 111</code>.  
> So, the score of <code>s</code> would be <code>|104 - 101| + |101 - 108| + |108 - 108| + |108 - 111| = 3 + 7 + 0 + 3 = 13</code>.    

#### Example 2:

> __Input:__ s = "zaz"  
>   
> __Output:__ 50  
>   
> __Explanation:__  
> The __ASCII__ values of the characters in s are: <code>'z' = 122</code>, <code>'a' = 97</code>.  
> So, the score of s would be <code>|122 - 97| + |97 - 122| = 25 + 25 = 50</code>.  

<br>

#### Constraints:

- <code>2 <= s.length <= 100</code>
- <code>s</code> consists only of lowercase English letters.
