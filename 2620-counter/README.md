## [2620. Counter](https://leetcode.com/problems/counter)

<code>Easy</code>

<br>

Given an integer <code>n</code>, return a <code>counter</code> function. This <code>counter</code> function initially returns <code>n</code> and then returns 1 more than the previous value every subsequent time it is called (<code>n</code>, <code>n + 1</code>, <code>n + 2</code>, etc).

<br>

#### Example 1:

> __Input:__   
> n = 10   
> ["call","call","call"]
>  
> __Output:__ [10,11,12]
>  
> __Explanation:__   
> counter() = 10 // The first time counter() is called, it returns n.  
> counter() = 11 // Returns 1 more than the previous time.  
> counter() = 12 // Returns 1 more than the previous time.  

#### Example 2:

> __Input:__
> 
> n = -2
> 
> ["call","call","call","call","call"]  
> __Output:__ [-2,-1,0,1,2]  
> __Explanation:__ counter() initially returns -2. Then increases after each sebsequent call.  

<br>

#### Constraints:

- <code>-1000 <= n <= 1000</code>
- <code>0 <= calls.length <= 1000</code>
- <code>calls[i] === "call"</code>
