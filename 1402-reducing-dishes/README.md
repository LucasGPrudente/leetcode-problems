## [1402. Reducing Dishes](https://leetcode.com/problems/reducing-dishes/)

<code>Hard</code>

<br>

A chef has collected data on the <code>satisfaction</code> level of his <code>n</code> dishes. Chef can cook any dish in 1 unit of time.

__Like-time coefficient__ of a dish is defined as the time taken to cook that dish including previous dishes multiplied by its satisfaction level i.e. <code>time[i] * satisfaction[i]</code>.

Return the maximum sum of __like-time coefficient__ that the chef can obtain after preparing some amount of dishes.

Dishes can be prepared in __any__ order and the chef can discard some dishes to get this maximum value.

<br>

#### Example 1:

> __Input:__ satisfaction = [-1,-8,0,5,-9]  
> __Output:__ 14  
> __Explanation:__ After Removing the second and last dish, the maximum total like-time coefficient will be equal to (-1*1 + 0*2 + 5*3 = 14).  
> Each dish is prepared in one unit of time.  

#### Example 2:

> __Input:__ satisfaction = [4,3,2]  
> __Output:__ 20  
> __Explanation:__ Dishes can be prepared in any order, (2*1 + 3*2 + 4*3 = 20)  

#### Example 3:

> __Input:__ satisfaction = [-1,-4,-5]  
> __Output:__ 0  
> __Explanation:__ People do not like the dishes. No dish is prepared.  

<br>

#### Constraints:

- <code>n == satisfaction.length</code>
- <code>1 <= n <= 500</code>
- <code>-1000 <= satisfaction[i] <= 1000</code>
