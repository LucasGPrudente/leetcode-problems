## [819. Most Common Word](https://leetcode.com/problems/most-common-word)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>String</code> <code>Counting</code>

<br>

Given a string <code>paragraph</code> and a string array of the banned words <code>banned</code>, return *the most frequent word that is not banned*. It is __guaranteed__ there is __at least one word__ that is not banned, and that the answer is __unique__.

The words in <code>paragraph</code> are __case-insensitive__ and the answer should be returned in __lowercase__.

<br>

#### Example 1:

> __Input:__ paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
>
> __Output:__ "ball"
>
> __Explanation:__
> "hit" occurs 3 times, but it is a banned word.
> "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
> Note that words in the paragraph are not case sensitive,
> that punctuation is ignored (even if adjacent to words, such as > "ball,"),
> and that "hit" isn't the answer even though it occurs more because it is banned.

#### Example 2:

> __Input:__ paragraph = "a.", banned = []
>
> __Output:__ "a"

<br>

#### Constraints:

- <code>1 <= paragraph.length <= 1000</code>
- paragraph consists of English letters, space <code>' '</code>, or one of the symbols: <code>"!?',;."</code>.
- <code>0 <= banned.length <= 100</code>
- <code>1 <= banned[i].length <= 10</code>
- <code>banned[i]</code> consists of only lowercase English letters.