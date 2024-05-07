## [2942. Find Words Containing Character](https://leetcode.com/problems/find-words-containing-character)

<code>Easy</code> <code>Array</code> <code>String</code>

<br>

You are given a __0-indexed__ array of strings <code>words</code> and a character <code>x</code>.

Return *an __array of indices__ representing the words that contain the character* <code>x</code>.

__Note__ that the returned array may be in __any__ order.

<br>

#### Example 1:

> __Input:__ words = ["leet","code"], x = "e"
> 
> __Output:__ [0,1]
> 
> __Explanation:__ "e" occurs in both words: "leet", and "code". Hence, we return indices 0 and 1.  

#### Example 2:

> __Input:__ words = ["abc","bcd","aaaa","cbc"], x = "a"
> 
> __Output:__ [0,2]
> 
> __Explanation:__ "a" occurs in "abc", and "aaaa". Hence, we return indices 0 and 2.  

#### Example 3:

> __Input:__ words = ["abc","bcd","aaaa","cbc"], x = "z"
> 
> __Output:__ []
> 
> __Explanation:__ "z" does not occur in any of the words. Hence, we return an empty array.  

<br>

#### Constraints:

- <code>1 <= words.length <= 50</code>
- <code>1 <= words[i].length <= 50</code>
- <code>x</code> is a lowercase English letter.
- <code>words[i]</code> consists only of lowercase English letters.
