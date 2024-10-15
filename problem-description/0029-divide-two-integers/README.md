## [29. Divide Two Integers](https://leetcode.com/problems/divide-two-integers)

<code>Medium</code> <code>Math</code> <code>Bit Manipulation</code>

<br>

Given two integers <code>dividend</code> and <code>divisor</code>, divide two integers __without__ using multiplication, division, and mod operator.

The integer division should truncate toward zero, which means losing its fractional part. For example, <code>8.345</code> would be truncated to <code>8</code>, and <code>-2.7335</code> would be truncated to <code>-2</code>.

Return *the __quotient__ after dividing* <code>dividend</code> *by* <code>divisor</code>.

__Note:__ Assume we are dealing with an environment that could only store integers within the __32-bit__ signed integer range: [<code>-2<sup>31</sup></code>, <code>2<sup>31</sup> - 1</code>]. For this problem, if the quotient is __strictly greater than__ <code>2<sup>31</sup> - 1</code>, then return <code>2<sup>31</sup> - 1</code>, and if the quotient is __strictly less than__ <code>-2<sup>31</sup></code>, then return <code>-2<sup>31</sup></code>.

<br>

#### Example 1:

> __Input:__ dividend = 10, divisor = 3
>
> __Output:__ 3
>
> __Explanation:__ 10/3 = 3.33333.. which is truncated to 3.

#### Example 2:

> __Input:__ dividend = 7, divisor = -3
>
> __Output:__ -2
>
> __Explanation:__ 7/-3 = -2.33333.. which is truncated to -2.

<br>

#### Constraints:

- <code>-2<sup>31</sup> <= dividend, divisor <= 2<sup>31</sup> - 1</code>
- <code>divisor != 0</code>