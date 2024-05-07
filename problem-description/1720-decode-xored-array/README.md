## [1720. Decode XORed Array](https://leetcode.com/problems/decode-xored-array)

<code>Easy</code> <code>Array</code> <code>Bit Manipulation</code>

<br>

There is a __hidden__ integer array <code>arr</code> that consists of <code>n</code> non-negative integers.

It was encoded into another integer array <code>encoded</code> of length <code>n - 1</code>, such that <code>encoded[i] = arr[i] XOR arr[i + 1]</code>. For example, if <code>arr = [1,0,2,1]</code>, then <code>encoded = [1,2,3]</code>.

You are given the <code>encoded</code> array. You are also given an integer <code>first</code>, that is the first element of <code>arr</code>, i.e. <code>arr[0]</code>.

Return *the original array* <code>arr</code>. It can be proved that the answer exists and is unique.

<br>

#### Example 1:

> __Input:__ encoded = [1,2,3], first = 1
> 
> __Output:__ [1,0,2,1]
> 
> __Explanation:__ If arr = [1,0,2,1], then first = 1 and encoded = [1 XOR 0, 0 XOR 2, 2 XOR 1] = [1,2,3]  

#### Example 2:

> __Input:__ encoded = [6,2,7,3], first = 4
> 
> __Output:__ [4,2,0,7,4]  

<br>

#### Constraints:

- <code>2 <= n <= 10<sup>4</sup></code>
- <code>encoded.length == n - 1</code>
- <code>0 <= encoded[i] <= 10<sup>5</sup></code>
- <code>0 <= first <= 10<sup>5</sup></code>
