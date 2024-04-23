## [1859. Sorting the Sentence](https://leetcode.com/problems/sorting-the-sentence)

<code>Easy</code> <code>String</code> <code>Sorting</code>

<br>

A __sentence__ is a list of words that are separated by a single space with no leading or trailing spaces. Each word consists of lowercase and uppercase English letters.

A sentence can be __shuffled__ by appending the __1-indexed word position__ to each word then rearranging the words in the sentence.

- For example, the sentence <code>"This is a sentence"</code> can be shuffled as <code>"sentence4 a3 is2 This1"</code> or <code>"is2 sentence4 This1 a3"</code>.

Given a __shuffled sentence__ <code>s</code> containing no more than <code>9</code> words, reconstruct and return *the original sentence*.

<br>

#### Example 1:

> __Input:__ s = "is2 sentence4 This1 a3"
> 
> __Output:__ "This is a sentence"
> 
> __Explanation:__ Sort the words in s to their original positions "This1 is2 a3 sentence4", then remove the numbers.  

#### Example 2:

> __Input:__ s = "Myself2 Me1 I4 and3"
>
> __Output:__ "Me Myself and I"
> 
> __Explanation:__ Sort the words in s to their original positions "Me1 Myself2 and3 I4", then remove the numbers.  

<br>

#### Constraints:

- <code>2 <= s.length <= 200</code>
- <code>s</code> consists of lowercase and uppercase English letters, spaces, and digits from <code>1</code> to <code>9</code>.
- The number of words in <code>s</code> is between <code>1</code> and <code>9</code>.
- The words in <code>s</code> are separated by a single space.
- <code>s</code> contains no leading or trailing spaces.
