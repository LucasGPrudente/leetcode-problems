## [771. Jewels and Stones](https://leetcode.com/problems/jewels-and-stones/)

<code>Easy</code>

<br>

You're given strings <code>jewels</code> representing the types of stones that are jewels, and <code>stones</code> representing the stones you have. Each character in <code>stones</code> is a type of stone you have. You want to know how many of the stones you have are also jewels.

Letters are case sensitive, so <code>"a"</code> is considered a different type of stone from <code>"A"</code>.

<br>

#### Example 1:

> __Input:__ jewels = "aA", stones = "aAAbbbb"  
> __Output:__ 3  

#### Example 2:

> __Input:__ jewels = "z", stones = "ZZ"  
> __Output:__ 0  

<br>

#### Constraints:

- <code>1 <= jewels.length, stones.length <= 50</code>
- <code>jewels</code> and <code>stones</code> consist of only English letters.
- All the characters of <code>jewels</code> are __unique__.
