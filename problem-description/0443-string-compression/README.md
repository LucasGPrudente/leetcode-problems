## [443. String Compression](https://leetcode.com/problems/string-compression)

<code>Medium</code> <code>Two Pointers</code> <code>String</code> 

<br>

Given an array of characters <code>chars</code>, compress it using the following algorithm:

Begin with an empty string <code>s</code>. For each group of __consecutive repeating characters__ in <code>chars</code>:

- If the group's length is <code>1</code>, append the character to <code>s</code>.
- Otherwise, append the character followed by the group's length.

The compressed string <code>s</code> __should not be returned separately__, but instead, be stored __in the input character array__ <code>chars</code>. Note that group lengths that are <code>10</code> or longer will be split into multiple characters in <code>chars</code>.

After you are done __modifying the input array__, return *the new length of the array*.

You must write an algorithm that uses only constant extra space.

<br>

#### Example 1:

> __Input:__ chars = ["a","a","b","b","c","c","c"]
> 
> __Output:__ Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]
> 
> __Explanation:__ The groups are "aa", "bb", and "ccc". This compresses to "a2b2c3".  

#### Example 2:

> __Input:__ chars = ["a"]
>
> __Output:__ Return 1, and the first character of the input array should be: ["a"]
> 
> __Explanation:__ The only group is "a", which remains uncompressed since it's a single character.  

#### Example 3:

> __Input:__ chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
> 
> __Output:__ Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].
> 
> __Explanation:__ The groups are "a" and "bbbbbbbbbbbb". This compresses to "ab12".  
 
<br>

#### Constraints:

- <code>1 <= chars.length <= 2000</code>
- <code>chars[i]</code> is a lowercase English letter, uppercase English letter, digit, or symbol.
