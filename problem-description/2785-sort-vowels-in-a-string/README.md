## [2785. Sort Vowels in a String](https://leetcode.com/problems/sort-vowels-in-a-string)

<code>Medium</code> <code>String</code> <code>Sorting</code>

<br>

Given a __0-indexed__ string <code>s</code>, __permute__ <code>s</code> to get a new string <code>t</code> such that:

- All consonants remain in their original places. More formally, if there is an index <code>i</code> with <code>0 <= i < s.length</code> such that <code>s[i]</code> is a consonant, then <code>t[i] = s[i]</code>.

- The vowels must be sorted in the __nondecreasing__ order of their __ASCII__ values. More formally, for pairs of indices <code>i</code>, <code>j</code> with <code>0 <= i < j < s.length</code> such that <code>s[i]</code> and <code>s[j]</code> are vowels, then <code>t[i]</code> must not have a higher ASCII value than <code>t[j]</code>.

Return *the resulting string*.

The vowels are <code>'a'</code>, <code>'e'</code>, <code>'i'</code>, <code>'o'</code>, and <code>'u'</code>, and they can appear in lowercase or uppercase. Consonants comprise all letters that are not vowels.

<br>

#### Example 1:

> __Input:__ s = "lEetcOde"
> 
> __Output:__ "lEOtcede"
> 
> __Explanation:__ 'E', 'O', and 'e' are the vowels in s; 'l', 't', 'c', and 'd' are all consonants.  
> The vowels are sorted according to their ASCII values, and the consonants remain in the same places.  

#### Example 2:

> __Input:__ s = "lYmpH"
>  
> __Output:__ "lYmpH"
> 
> __Explanation__: There are no vowels in s (all characters in s are consonants), so we return "lYmpH".  
  
<br>

#### Constraints:

- <code>1 <= s.length <= 10<sup>5</sup></code>
- <code>s</code> consists only of letters of the English alphabet in __uppercase and lowercase__.
