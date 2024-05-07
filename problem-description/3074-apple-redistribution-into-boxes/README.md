## [3074. Apple Redistribution into Boxes](https://leetcode.com/problems/apple-redistribution-into-boxes/)

<code>Easy</code> <code>Array</code> <code>Greedy</code> <code>Sorting</code>

<br>

You are given an array <code>apple</code> of size <code>n</code> and an array <code>capacity</code> of size <code>m</code>.

There are <code>n</code> packs where the <code>i<sup>th</sup></code> pack contains <code>apple[i]</code> apples. There are <code>m</code> boxes as well, and the <code>i<sup>th</sup></code> box has a capacity of <code>capacity[i]</code> apples.

Return *the __minimum__ number of boxes you need to select to redistribute these* <code>n</code> *packs of apples into boxes*.

__Note__ that, apples from the same pack can be distributed into different boxes.

<br>

#### Example 1:

> __Input:__ apple = [1,3,2], capacity = [4,3,1,5,2]
> 
> __Output:__ 2
> 
> __Explanation:__ We will use boxes with capacities 4 and 5.  
> It is possible to distribute the apples as the total capacity is greater than or equal to the total number of apples.  

#### Example 2:

> __Input:__ apple = [5,5,5], capacity = [2,4,2,7]
> 
> __Output:__ 4
> 
> __Explanation:__ We will need to use all the boxes.   

<br>

#### Constraints:

- <code>1 <= n == apple.length <= 50</code>
- <code>1 <= m == capacity.length <= 50</code>
- <code>1 <= apple[i], capacity[i] <= 50</code>
- The input is generated such that it's possible to redistribute packs of apples into boxes.
