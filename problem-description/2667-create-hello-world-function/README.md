## [2667. Create Hello World Function](https://leetcode.com/problems/create-hello-world-function)

<code>Easy</code>

<br>

Write a function <code>createHelloWorld</code>. It should return a new function that always returns <code>"Hello World"</code>.

<br>

#### Example 1:

> __Input:__ args = []
> 
> __Output:__ "Hello World"
> 
> __Explanation:__  
> const f = createHelloWorld();  
> f(); // "Hello World"  
>   
> The function returned by createHelloWorld should always return "Hello World".  

#### Example 2:

> __Input:__ args = [{},null,42]
> 
> __Output:__ "Hello World"
>  
> __Explanation:__  
> const f = createHelloWorld();  
> f({}, null, 42); // "Hello World"  
>   
> Any arguments could be passed to the function but it should still always return "Hello World".  

<br>

#### Constraints:

- <code>0 <= args.length <= 10</code>
