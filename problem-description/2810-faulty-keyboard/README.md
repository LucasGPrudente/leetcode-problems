## [2810. Faulty Keyboard](https://leetcode.com/problems/faulty-keyboard)

<code>Easy</code> <code>String</code> <code>Simulation</code>

<br>

Your laptop keyboard is faulty, and whenever you type a character <code>'i'</code> on it, it reverses the string that you have written. Typing other characters works as expected.

You are given a __0-indexed__ string <code>s</code>, and you type each character of <code>s</code> using your faulty keyboard.

Return *the final string that will be present on your laptop screen*.

<br>

#### Example 1:

> __Input:__ s = "string"
> 
> __Output:__ "rtsng"
> 
> __Explanation:__   
> After typing first character, the text on the screen is "s".  
> After the second character, the text is "st".   
> After the third character, the text is "str".  
> Since the fourth character is an 'i', the text gets reversed and becomes "rts".  
> After the fifth character, the text is "rtsn".   
> After the sixth character, the text is "rtsng".   
> Therefore, we return "rtsng".  

#### Example 2:

> __Input:__ s = "poiinter"
> 
> __Output:__ "ponter"
> 
> __Explanation:__   
> After the first character, the text on the screen is "p".  
> After the second character, the text is "po".   
> Since the third character you type is an 'i', the text gets reversed and becomes "op".   
> Since the fourth character you type is an 'i', the text gets reversed and becomes "po".  
> After the fifth character, the text is "pon".  
> After the sixth character, the text is "pont".   
> After the seventh character, the text is "ponte".   
> After the eighth character, the text is "ponter".   
> Therefore, we return "ponter".  

<br>

#### Constraints:

- <code>1 <= s.length <= 100</code>
- <code>s</code> consists of lowercase English letters.
- <code>s[0] != 'i'</code>
