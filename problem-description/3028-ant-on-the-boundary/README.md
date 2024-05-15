## [3028. Ant on the Boundary](https://leetcode.com/problems/ant-on-the-boundary)

<code>Easy</code> <code>Array</code> <code>Simulation</code> <code>Prefix Sum</code>

<br>

An ant is on a boundary. It sometimes goes __left__ and sometimes __right__.

You are given an array of __non-zero__ integers <code>nums</code>. The ant starts reading <code>nums</code> from the first element of it to its end. At each step, it moves according to the value of the current element:

- If <code>nums[i] < 0</code>, it moves __left__ by <code>-nums[i]</code> units.
- If <code>nums[i] > 0</code>, it moves __right__ by <code>nums[i]</code> units.

Return *the number of times the ant __returns__ to the boundary*.

<br>

#### Notes:

- There is an infinite space on both sides of the boundary.
- We check whether the ant is on the boundary only after it has moved <code>|nums[i]|</code> units. In other words, if the ant crosses the boundary during its movement, it does not count.
 
<br>

#### Example 1:

> __Input:__ nums = [2,3,-5]
> 
> __Output:__ 1
> 
> __Explanation:__ After the first step, the ant is 2 steps to the right of the boundary.  
> After the second step, the ant is 5 steps to the right of the boundary.  
> After the third step, the ant is on the boundary.  
> So the answer is 1.  

#### Example 2:

> __Input:__ nums = [3,2,-3,-4]
> 
> __Output:__ 0
> 
> __Explanation:__ After the first step, the ant is 3 steps to the right of the boundary.  
> After the second step, the ant is 5 steps to the right of the boundary.  
> After the third step, the ant is 2 steps to the right of the boundary.  
> After the fourth step, the ant is 2 steps to the left of the boundary.  
> The ant never returned to the boundary, so the answer is 0.  
 
<br>

#### Constraints:

- <code>1 <= nums.length <= 100</code>
- <code>-10 <= nums[i] <= 10</code>
- <code>nums[i] != 0</code>
