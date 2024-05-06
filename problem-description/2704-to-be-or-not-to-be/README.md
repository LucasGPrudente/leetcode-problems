## [2704. To Be Or Not To Be](https://leetcode.com/problems/to-be-or-not-to-be)

<code>Easy</code>

<br>

Write a function <code>expect</code> that helps developers test their code. It should take in any value <code>val</code> and return an object with the following two functions.

- <code>toBe(val)</code> accepts another value and returns <code>true</code> if the two values <code>===</code> each other. If they are not equal, it should throw an error <code>"Not Equal"</code>.
- <code>notToBe(val)</code> accepts another value and returns <code>true</code> if the two values <code>!==</code> each other. If they are equal, it should throw an error <code>"Equal"</code>.

<br>

#### Example 1:

> __Input:__ func = () => expect(5).toBe(5)
> 
> __Output:__ {"value": true}
> 
> __Explanation:__ 5 === 5 so this expression returns true.  

#### Example 2:

> __Input:__ func = () => expect(5).toBe(null)
> 
> __Output:__ {"error": "Not Equal"}
> 
> __Explanation:__ 5 !== null so this expression throw the error "Not Equal".  

#### Example 3:

> __Input:__ func = () => expect(5).notToBe(null)
> 
> __Output:__ {"value": true}
> 
> __Explanation:__ 5 !== null so this expression returns true.  
