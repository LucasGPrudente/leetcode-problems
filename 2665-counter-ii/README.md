## [2665. Counter II](https://leetcode.com/problems/counter-ii)

<code>Easy</code>

<br>

Write a function <code>createCounter</code>. It should accept an initial integer <code>init</code>. It should return an object with three functions.

The three functions are:

- <code>increment()</code> increases the current value by 1 and then returns it.
- <code>decrement()</code> reduces the current value by 1 and then returns it.
- <code>reset()</code> sets the current value to <code>init</code> and then returns it.

<br>

#### Example 1:

> __Input:__ init = 5, calls = ["increment","reset","decrement"]
> 
> __Output:__ [6,5,4]
> 
> __Explanation:__  
> const counter = createCounter(5);  
> counter.increment(); // 6  
> counter.reset(); // 5  
> counter.decrement(); // 4  

#### Example 2:

> __Input:__ init = 0, calls = ["increment","increment","decrement","reset","reset"]
> 
> __Output:__ [1,2,1,0,0]
> 
> __Explanation:__  
> const counter = createCounter(0);  
> counter.increment(); // 1  
> counter.increment(); // 2  
> counter.decrement(); // 1  
> counter.reset(); // 0  
> counter.reset(); // 0  

<br>

#### Constraints:

- <code>-1000 <= init <= 1000</code>
- <code>0 <= calls.length <= 1000</code>
- <code>calls[i]</code> is one of "increment", "decrement" and "reset"
