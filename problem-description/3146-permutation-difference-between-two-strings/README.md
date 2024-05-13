## [3146. Permutation Difference between Two Strings](https://leetcode.com/problems/permutation-difference-between-two-strings)

<code>Easy</code>

<br>

You are given two strings <code>s</code> and <code>t</code> such that every character occurs at most once in <code>s</code> and <code>t</code> is a permutation of <code>s</code>.

The __permutation difference__ between <code>s</code> and <code>t</code> is defined as the __sum__ of the absolute difference between the index of the occurrence of each character in <code>s</code> and the index of the occurrence of the same character in <code>t</code>.

Return the __permutation difference__ between <code>s</code> and <code>t</code>.

<br>

#### Example 1:

> __Input:__ s = "abc", t = "bac"  
>   
> __Output:__ 2  
>   
> __Explanation:__  
>   
> For <code>s = "abc"</code> and <code>t = "bac"</code>, the permutation difference of <code>s</code> and <code>t</code> is equal to the sum of:  
>   
> - The absolute difference between the index of the occurrence of <code>"a"</code> in <code>s</code> and the index of the occurrence of <code>"a"</code> in <code>t</code>.  
> - The absolute difference between the index of the occurrence of <code>"b"</code> in <code>s</code> and the index of the occurrence of <code>"b"</code> in <code>t</code>.  
> - The absolute difference between the index of the occurrence of <code>"c"</code> in <code>s</code> and the index of the occurrence of <code>"c"</code> in <code>t</code>.  
>   
> That is, the permutation difference between <code>s</code> and <code>t</code> is equal to <code>|0 - 1| + |2 - 2| + |1 - 0| = 2</code>.  

#### Example 2:

> __Input:__ s = "abcde", t = "edbac"  
>   
> __Output:__ 12  
>   
> __Explanation:__ The permutation difference between <code>s</code> and <code>t</code> is equal to <code>|0 - 3| + |1 - 2| + |2 - 4| + |3 - 1| + |4 - 0| = 12</code>.  

<br>

#### Constraints:

- <code>1 <= s.length <= 26</code>
- Each character occurs at most once in <code>s</code>.
- <code>t</code> is a permutation of <code>s</code>.
- <code>s</code> consists only of lowercase English letters.
