## [2011. Final Value of Variable After Performing Operations](https://leetcode.com/problems/final-value-of-variable-after-performing-operations)

<code>Easy</code> <code>Array</code> <code>String</code> <code>Simulation</code>

<br>

There is a programming language with only __four__ operations and one variable <code>X</code>:

- <code>++X</code> and <code>X++</code> __increments__ the value of the variable <code>X</code> by <code>1</code>.
- <code>--X</code> and <code>X--</code> __decrements__ the value of the variable <code>X</code> by <code>1</code>.

Initially, the value of <code>X</code> is <code>0</code>.

Given an array of strings <code>operations</code> containing a list of operations, return *the __final__ value of* <code>X</code> *after performing all the operations*.

<br>

#### Example 1:

> __Input:__ operations = ["--X","X++","X++"]
>   
> __Output:__ 1
> 
> __Explanation:__ The operations are performed as follows:  
> Initially, X = 0.  
> --X: X is decremented by 1, X =  0 - 1 = -1.  
> X++: X is incremented by 1, X = -1 + 1 =  0.  
> X++: X is incremented by 1, X =  0 + 1 =  1.  

#### Example 2:

> __Input:__ operations = ["++X","++X","X++"]
>  
> __Output:__ 3
> 
> __Explanation:__ The operations are performed as follows:    
> Initially, X = 0.  
> ++X: X is incremented by 1, X = 0 + 1 = 1.  
> ++X: X is incremented by 1, X = 1 + 1 = 2.  
> X++: X is incremented by 1, X = 2 + 1 = 3.  

#### Example 3:

> __Input:__ operations = ["X++","++X","--X","X--"]
>  
> __Output:__ 0
> 
> __Explanation:__ The operations are performed as follows:  
> Initially, X = 0.  
> X++: X is incremented by 1, X = 0 + 1 = 1.  
> ++X: X is incremented by 1, X = 1 + 1 = 2.  
> --X: X is decremented by 1, X = 2 - 1 = 1.  
> X--: X is decremented by 1, X = 1 - 1 = 0.  

<br>

#### Constraints:

- <code>1 <= operations.length <= 100</code>
- <code>operations[i]</code> will be either <code>"++X"</code>, <code>"X++"</code>, <code>"--X"</code>, or <code>"X--"</code>.
