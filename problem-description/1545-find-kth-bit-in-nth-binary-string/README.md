## [1545. Find Kth Bit in Nth Binary String](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string)

<code>Medium</code> <code>String</code> <code>Recursion</code> <code>Simulation</code>

<br>

Given two positive integers <code>n</code> and <code>k</code>, the binary string <code>S<sub>n</sub></code> is formed as follows:

- <code>S<sub>1</sub> = "0"</code>
- <code>S<sub>i</sub> = S<sub>i - 1</sub> + "1" + reverse(invert(S<sub>i - 1</sub>))</code> for <code>i > 1</code>

Where <code>+</code> denotes the concatenation operation, <code>reverse(x)</code> returns the reversed string <code>x</code>, and <code>invert(x)</code> inverts all the bits in <code>x</code> (<code>0</code> changes to <code>1</code> and <code>1</code> changes to <code>0</code>).

For example, the first four strings in the above sequence are:

- <code>S<sub>1</sub> = "0"</code>
- <code>S<sub>2</sub> = "011"</code>
- <code>S<sub>3</sub> = "0111001"</code>
- <code>S<sub>4</sub> = "011100110110001"</code>

Return *the* <code>k<sup>th</sup></code> *bit in* <code>S<sub>n</sub></code>. It is guaranteed that <code>k</code> is valid for the given <code>n</code>.

<br>

#### Example 1:

> __Input:__ n = 3, k = 1
>
> __Output:__ "0"
>
> __Explanation:__ S<sub>3</sub> is "__0__111001". The 1st bit is "0".

#### Example 2:

> __Input:__ n = 4, k = 11
>
> __Output:__ "1"
>
> __Explanation:__ S<sub>4</sub> is "0111001101__1__0001". The 11th bit is "1".

<br>

#### Constraints:

- <code>1 <= n <= 20</code>
- <code>1 <= k <= 2<sup>n</sup> - 1</code>
