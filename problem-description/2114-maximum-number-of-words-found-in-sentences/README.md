## [2114. Maximum Number of Words Found in Sentences](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences)

<code>Easy</code> <code>Array</code> <code>String</code>

<br>

A __sentence__ is a list of __words__ that are separated by a single space with no leading or trailing spaces.

You are given an array of strings <code>sentences</code>, where each <code>sentences[i]</code> represents a single __sentence__.

Return *the __maximum number of words__ that appear in a single sentence*.

<br>

#### Example 1:

> __Input:__ sentences = ["alice and bob love leetcode", "i think so too", "this is great thanks very much"]
> 
> __Output:__ 6
> 
> __Explanation:__   
> - The first sentence, "alice and bob love leetcode", has 5 words in total.  
> - The second sentence, "i think so too", has 4 words in total.  
> - The third sentence, "this is great thanks very much", has 6 words in total.  
> Thus, the maximum number of words in a single sentence comes from the third sentence, which has 6 words.  

#### Example 2:

> __Input:__ sentences = ["please wait", "continue to fight", "continue to win"]
> 
> __Output:__ 3
> 
> __Explanation:__ It is possible that multiple sentences contain the same number of words.   
> In this example, the second and third sentences (underlined) have the same number of words.  

<br>

#### Constraints:

- <code>1 <= sentences.length <= 100</code>
- <code>1 <= sentences[i].length <= 100</code>
- <code>sentences[i]</code> consists only of lowercase English letters and <code>' '</code> only.
- <code>sentences[i]</code> does not have leading or trailing spaces.
- All the words in <code>sentences[i]</code> are separated by a single space.
