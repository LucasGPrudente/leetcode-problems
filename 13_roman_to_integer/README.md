## [13. Roman to Integer](https://leetcode.com/problems/roman-to-integer/)

Roman numerals are represented by seven different symbols: <code>I</code>, <code>V</code>, <code>X</code>, 
<code>L</code>, <code>C</code>, <code>D</code> and <code>M</code>.

__Symbol__       __Value__
I             1
V             5
X             10
L             50
C             100
D             500
M             1000

For example, <code>2</code> is written as <code>II</code> in Roman numeral, just two ones added together. 
<code>12</code> is written as <code>XII</code>, which is simply <code>X + II</code>. 
The number <code>27</code> is written as XXVII, which is <code>XX + V + II</code>.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not <code>IIII</code>. 
Instead, the number four is written as <code>IV</code>. Because the one is before the five we subtract it making four. 
The same principle applies to the number nine, which is written as <code>IX</code>. There are six instances where subtraction is used:

- <code>I</code> can be placed before <code>V</code> (5) and <code>X</code> (10) to make 4 and 9. 
- <code>X</code> can be placed before <code>L</code> (50) and <code>C</code> (100) to make 40 and 90. 
- <code>C</code> can be placed before <code>D</code> (500) and <code>M</code> (1000) to make 400 and 900.

Given a roman numeral, convert it to an integer.

#### Example 1:

> __Input:__ s = "III"  
> __Output:__ 3  
> __Explanation:__ III = 3.

#### Example 2:

> __Input:__ s = "LVIII"  
> __Output:__ 58  
> __Explanation:__ L = 50, V= 5, III = 3.

#### Example 3:

> __Input:__ s = "MCMXCIV"  
> __Output:__ 1994  
> __Explanation:__ M = 1000, CM = 900, XC = 90 and IV = 4.
 
#### Constraints:

- <code>1 <= s.length <= 15</code>
- <code>s</code> contains only the characters <code>('I', 'V', 'X', 'L', 'C', 'D', 'M')</code>.
- It is guaranteed that <code>s</code> is a valid roman numeral in the range <code>[1, 3999]</code>.
