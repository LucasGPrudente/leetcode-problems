## [8. String to Integer (atoi)](https://leetcode.com/problems/string-to-integer-atoi)

<code>Medium</code> <code>String</code>

<br>

Implement the <code>myAtoi(string s)</code> function, which converts a string to a 32-bit signed integer.

The algorithm for <code>myAtoi(string s)</code> is as follows:

1. __Whitespace:__ Ignore any leading whitespace (<code>" "</code>).

2. __Signedness:__ Determine the sign by checking if the next character is <code>'-'</code> or <code>'+'</code>, assuming positivity is neither present.

3. __Conversion:__ Read the integer by skipping leading zeros until a non-digit character is encountered or the end of the string is reached. If no digits were read, then the result is 0.

4. __Rounding:__ If the integer is out of the 32-bit signed integer range [<code>-2<sup>31</sup></code>, <code>2<sup>31</sup> - 1</code>], then round the integer to remain in the range. Specifically, integers less than <code>-2<sup>31</sup></code> should be rounded to <code>-2<sup>31</sup></code>, and integers greater than <code>2<sup>31</sup> - 1</code> should be rounded to <code>2<sup>31</sup> - 1</code>.

Return the integer as the final result.

<br>

#### Example 1:

> __Input:__ "42"
>
> __Output:__ 42
>
> __Explanation:__
>
> The underlined characters are what is read in and the caret is the current reader position.
>
> Step 1: "42" (no characters read because there is no leading whitespace)
>
> Step 2: "42" (no characters read because there is neither a '-' nor '+')
>
> Step 3: "42" ("42" is read in)

#### Example 2:

> __Input:__ " -042"
>
> __Output:__ -42
>
> __Explanation:__
>
> Step 1: "   -042" (leading whitespace is read and ignored)
>
> Step 2: "   -042" ('-' is read, so the result should be negative)
>
> Step 3: "   -042" ("042" is read in, leading zeros ignored in the result)

#### Example 3:

> __Input:__ "1337c0d3"
>
> __Output:__ 1337
>
> __Explanation:__
>
> Step 1: "1337c0d3" (no characters read because there is no leading whitespace)
>
> Step 2: "1337c0d3" (no characters read because there is neither a '-' nor '+')
>
> Step 3: "1337c0d3" ("1337" is read in; reading stops because the next character is a non-digit)

#### Example 4:

> __Input:__ "0-1"
>
> __Output:__ 0
>
> __Explanation:__
>
> Step 1: "0-1" (no characters read because there is no leading whitespace)
>
> Step 2: "0-1" (no characters read because there is neither a '-' nor '+')
>
> Step 3: "0-1" ("0" is read in; reading stops because the next character is a non-digit)

#### Example 5:

> __Input:__ "words and 987"
>
> __Output:__ 0
>
> __Explanation:__ Reading stops at the first non-digit character 'w'.

<br>

#### Constraints:

- <code>0 <= s.length <= 200</code>
- <code>s</code> consists of English letters (lower-case and upper-case), digits (<code>0-9</code>), <code>' '</code>, <code>'+'</code>, <code>'-'</code>, and <code>'.'</code>.
