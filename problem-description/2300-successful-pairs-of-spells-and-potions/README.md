## [2300. Successful Pairs of Spells and Potions](https://leetcode.com/problems/successful-pairs-of-spells-and-potions)

<code>Medium</code> <code>Array</code> <code>Two Pointers</code> <code>Binary Search</code> <code>Sorting</code>

<br>

You are given two positive integer arrays <code>spells</code> and <code>potions</code>, of length <code>n</code> and <code>m</code> respectively, where <code>spells[i]</code> represents the strength of the <code>i<sup>th</sup></code> spell and <code>potions[j]</code> represents the strength of the <code>j<sup>th</sup></code> potion.

You are also given an integer <code>success</code>. A spell and potion pair is considered successful if the product of their strengths is at least <code>success</code>.

Return an integer array <code>pairs</code> of length <code>n</code> where <code>pairs[i]</code> is the number of potions that will form a successful pair with the <code>i<sup>th</sup></code> spell.

<br>

#### Example 1:

> __Input:__ spells = [5,1,3], potions = [1,2,3,4,5], success = 7
> 
> __Output:__ [4,0,3]
> 
> __Explanation:__  
> - 0th spell: 5 * [1,2,3,4,5] = [5,10,15,20,25]. 4 pairs are successful.  
> - 1st spell: 1 * [1,2,3,4,5] = [1,2,3,4,5]. 0 pairs are successful.  
> - 2nd spell: 3 * [1,2,3,4,5] = [3,6,9,12,15]. 3 pairs are successful.  
> - Thus, [4,0,3] is returned.  

#### Example 2:

> __Input:__ spells = [3,1,2], potions = [8,5,8], success = 16
>  
> __Output:__ [2,0,2]
> 
> __Explanation:__  
> - 0th spell: 3 * [8,5,8] = [24,15,24]. 2 pairs are successful.  
> - 1st spell: 1 * [8,5,8] = [8,5,8]. 0 pairs are successful.   
> - 2nd spell: 2 * [8,5,8] = [16,10,16]. 2 pairs are successful.   
> - Thus, [2,0,2] is returned.  

<br>

#### Constraints:

- <code>n == spells.length</code>
- <code>m == potions.length</code>
- <code>1 <= n, m <= 10<sup>5</sup></code>
- <code>1 <= spells[i], potions[i] <= 10<sup>5</sup></code>
- <code>1 <= success <= 10<sup>10</sup></code>
