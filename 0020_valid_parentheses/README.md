## [20. Valid Parentheses](https://leetcode.com/problems/valid-parentheses/)

<code>Easy</code>

<br>

Given a string <code>s</code> containing just the characters <code>'('</code>, <code>')'</code>, <code>'{'</code>,
<code>'}'</code>, <code>'['</code> and <code>']'</code>, determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

<br>

#### Example 1:

> __Input:__ s = "()"
> __Output:__ true

#### Example 2:

> __Input:__ s = "()[]{}"
> __Output:__ true

#### Example 3:

> __Input:__ s = "(]"
> __Output:__ false

<br>

#### Constraints:

- <code>1 <= s.length <= 10<sup>4</sup></code>
- <code>s</code> consists of parentheses only <code>'()[]{}'</code>.
