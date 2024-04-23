## [1678. Goal Parser Interpretation](https://leetcode.com/problems/goal-parser-interpretation)

<code>Easy</code> <code>String</code>

<br>

You own a __Goal Parser__ that can interpret a string <code>command</code>. The <code>command</code> consists of an alphabet of <code>"G"</code>, <code>"()"</code> and/or <code>"(al)"</code> in some order. The Goal Parser will interpret <code>"G"</code> as the string <code>"G"</code>, <code>"()"</code> as the string <code>"o"</code>, and <code>"(al)"</code> as the string <code>"al"</code>. The interpreted strings are then concatenated in the original order.

Given the string <code>command</code>, return *the __Goal Parser's__ interpretation of* <code>command</code>.

<br>

#### Example 1:

> __Input:__ command = "G()(al)"  
> 
> __Output:__ "Goal"  
> 
> __Explanation:__ The Goal Parser interprets the command as follows:  
> G -> G  
> () -> o  
> (al) -> al  
> The final concatenated result is "Goal".  

#### Example 2:

> __Input:__ command = "G()()()()(al)"  
> 
> __Output:__ "Gooooal"  

#### Example 3:

> __Input:__ command = "(al)G(al)()()G"  
>   
> __Output:__ "alGalooG"  

<br>

#### Constraints:

- <code>1 <= command.length <= 100</code>
- <code>command</code> consists of <code>"G"</code>, <code>"()"</code>, and/or <code>"(al)"</code> in some order.
