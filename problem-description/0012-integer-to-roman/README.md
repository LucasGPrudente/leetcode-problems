## [12. Integer to Roman](https://leetcode.com/problems/integer-to-roman)

<code>Medium</code> <code>Hash Table</code> <code>Math</code> <code>String</code>

<br>

Seven different symbols represent Roman numerals with the following values:

|Symbol  |Value  |
|--------|-------|
|I	     |1      |
|V	     |5      |
|X	     |10     |
|L	     |50     |
|C     	 |100    |
|D	     |500    |
|M	     |1000   |

Roman numerals are formed by appending the conversions of decimal place values from highest to lowest. Converting a decimal place value into a Roman numeral has the following rules:

- If the value does not start with 4 or 9, select the symbol of the maximal value that can be subtracted from the input, append that symbol to the result, subtract its value, and convert the remainder to a Roman numeral.
- If the value starts with 4 or 9 use the __subtractive form__ representing one symbol subtracted from the following symbol, for example, 4 is 1 (<code>I</code>) less than 5 (<code>V</code>): <code>IV</code> and 9 is 1 (<code>I</code>) less than 10 (<code>X</code>): <code>IX</code>. Only the following subtractive forms are used: 4 (<code>IV</code>), 9 (<code>IX</code>), 40 (<code>XL</code>), 90 (<code>XC</code>), 400 (<code>CD</code>) and 900 (<code>CM</code>).
- Only powers of 10 (<code>I</code>, <code>X</code>, <code>C</code>, <code>M</code>) can be appended consecutively at most 3 times to represent multiples of 10. You cannot append 5 (<code>V</code>), 50 (<code>L</code>), or 500 (<code>D</code>) multiple times. If you need to append a symbol 4 times use the __subtractive form__.

Given an integer, convert it to a Roman numeral.

<br>

#### Example 1:

> __Input:__ num = 3749
> 
> __Output:__ "MMMDCCXLIX"
> 
> __Explanation:__
> 
> 3000 = MMM as 1000 (M) + 1000 (M) + 1000 (M)
>  700 = DCC as 500 (D) + 100 (C) + 100 (C)
>   40 = XL as 10 (X) less of 50 (L)
>    9 = IX as 1 (I) less of 10 (X)
>  
>  __Note:__ 49 is not 1 (I) less of 50 (L) because the conversion is based on decimal places

#### Example 2:

> __Input:__ num = 58
> 
> __Output:__ "LVIII"
> 
> __Explanation:__
> 
> 50 = L
>  8 = VIII

#### Example 3:

> __Input:__ num = 1994
> 
> __Output:__ "MCMXCIV"
> 
> __Explanation:__
> 
> 1000 = M
>  900 = CM
>   90 = XC
>    4 = IV

<br>

#### Constraints:

- <code>1 <= num <= 3999</code> 
