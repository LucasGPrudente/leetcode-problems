## [2744. Find Maximum Number of String Pairs](https://leetcode.com/problems/find-maximum-number-of-string-pairs)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>String</code> <code>Simulation</code>

<br>

You are given a __0-indexed__ array <code>words</code> consisting of __distinct__ strings.

The string <code>words[i]</code> can be paired with the string <code>words[i]</code> if:

- The string <code>words[i]</code> is equal to the reversed string of <code>words[i]</code>.
- <code>0 <= i < j < words.length</code>.

Return *the __maximum__ number of pairs that can be formed from the array* <code>words</code>.

Note that each string can belong in at __most one__ pair.

<br>

#### Example 1:

> __Input:__ words = ["cd","ac","dc","ca","zz"]
> 
> __Output:__ 2
> 
> __Explanation:__ In this example, we can form 2 pair of strings in the following way:
> - We pair the 0th string with the 2nd string, as the reversed string of word[0] is "dc" and is equal to words[2].
> - We pair the 1st string with the 3rd string, as the reversed string of word[1] is "ca" and is equal to words[3].
> It can be proven that 2 is the maximum number of pairs that can be formed.

#### Example 2:

> __Input:__ words = ["ab","ba","cc"]
> 
> __Output:__ 1
> 
> __Explanation:__ In this example, we can form 1 pair of strings in the following way:
> - We pair the 0th string with the 1st string, as the reversed string of words[1] is "ab" and is equal to words[0].
> It can be proven that 1 is the maximum number of pairs that can be formed.

#### Example 3:

> __Input:__ words = ["aa","ab"]
> 
> __Output:__ 0
> 
> __Explanation:__ In this example, we are unable to form any pair of strings.

<br>

#### Constraints:

- <code>1 <= words.length <= 50</code>
- <code>words[i].length == 2</code>
- <code>words</code> consists of distinct strings.
- <code>words[i]</code> contains only lowercase English letters.
