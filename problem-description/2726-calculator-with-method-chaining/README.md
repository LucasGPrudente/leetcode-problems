## [2726. Calculator with Method Chaining](https://leetcode.com/problems/calculator-with-method-chaining)

<code>Easy</code>

<br>

Design a <code>Calculator</code> class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The <code>Calculator</code> class constructor should accept a number which serves as the initial value of <code>result</code>.

Your <code>Calculator</code> class should have the following methods:

- <code>add</code> - This method adds the given number <code>value</code> to the <code>result</code> and returns the updated <code>Calculator</code>.
- <code>subtract</code> - This method subtracts the given number <code>value</code> from the <code>result</code> and returns the updated <code>Calculator</code>.
- <code>multiply</code> - This method multiplies the <code>result</code>  by the given number <code>value</code> and returns the updated <code>Calculator</code>.
- <code>divide</code> - This method divides the <code>result</code> by the given number <code>value</code> and returns the updated <code>Calculator</code>. If the passed value is <code>0</code>, an error <code>"Division by zero is not allowed"</code> should be thrown.
- <code>power</code> - This method raises the <code>result</code> to the power of the given number <code>value</code> and returns the updated <code>Calculator</code>.
- <code>getResult</code> - This method returns the <code>result</code>.

Solutions within <code>10<sup>-5</sup></code> of the actual result are considered correct.

<br>

#### Example 1:

> __Input:__  
> actions = ["Calculator", "add", "subtract", "getResult"],   
> values = [10, 5, 7]  
>   
> __Output:__ 8  
>   
> __Explanation:__   
> new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8  

#### Example 2:

> __Input:__   
> actions = ["Calculator", "multiply", "power", "getResult"],   
> values = [2, 5, 2]  
>   
> __Output:__ 100  
>   
> __Explanation:__   
> new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100  

#### Example 3:

> __Input:__   
> actions = ["Calculator", "divide", "getResult"],   
> values = [20, 0]  
>   
> __Output:__ "Division by zero is not allowed"  
>   
> __Explanation:__   
> new Calculator(20).divide(0).getResult() // 20 / 0   
>   
> The error should be thrown because we cannot divide by zero.  

<br>

#### Constraints:

- <code>actions</code> is a valid JSON array of strings
- <code>values</code> is a valid JSON array of numbers
- <code>2 <= actions.length <= 2 * 10<sup>4</sup></code>
- <code>1 <= values.length <= 2 * 10<sup>4</sup> - 1</code>
- <code>actions[i]</code> is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
- First action is always "Calculator"
- Last action is always "getResult"
