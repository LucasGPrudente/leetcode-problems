## [165. Compare Version Numbers](https://leetcode.com/problems/compare-version-numbers)

<code>Medium</code> <code>Two Pointers</code> <code>String</code>

<br>

Given two __version strings__, <code>version1</code> and <code>version2</code>, compare them. A version string consists of __revisions__ separated by dots <code>'.'</code>. The __value of the revision__ is its __integer conversion__ ignoring leading zeros.

To compare version strings, compare their revision values in __left-to-right order__. If one of the version strings has fewer revisions, treat the missing revision values as 0.

Return the following:

- If <code>version1 < version2</code>, return -1.
- If <code>version1 > version2</code>, return 1.

Otherwise, return 0.

<br>

#### Example 1:

> __Input:__ version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.
> 
> __Output:__ -1
> 
> __Explanation:__ version1's second revision is "2" and version2's second revision is "10": 2 < 10, so version1 < version2.

#### Example 2:

> __Input:__ version1 = "1.01", version2 = "1.001"
> 
> __Output:__ 0
> 
> __Explanation:__ Ignoring leading zeroes, both "01" and "001" represent the same integer "1".

#### Example 3:

> __Input:__ version1 = "1.0", version2 = "1.0.0.0"
> 
> __Output:__ 0
> 
> __Explanation:__ version1 has less revisions, which means every missing revision are treated as "0".
 
<br>

#### Constraints:

- <code>1 <= version1.length, version2.length <= 500</code>
- <code>version1</code> and <code>version2</code> only contain digits and <code>'.'</code>.
- <code>version1</code> and <code>version2</code> are valid version numbers
- All the given revisions in <code>version1</code> and <code>version2</code> can be stored in a __32-bit integer__.
