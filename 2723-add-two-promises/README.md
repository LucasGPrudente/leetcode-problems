## [2723. Add Two Promises](https://leetcode.com/problems/add-two-promises)

<code>Easy</code>

<br>

Given two promises <code>promise1</code> and <code>promise2</code>, return a new promise. <code>promise1</code> and <code>promise2</code> will both resolve with a number. The returned promise should resolve with the sum of the two numbers.

<br>

#### Example 1:

> __Input:__ 
> promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)), 
> promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
> 
> __Output:__ 7
> 
> __Explanation:__ The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7. The time the returned promise resolves is not judged for this problem.

#### Example 2:

> __Input:__ 
> promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)), 
> promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
> 
> __Output:__ -2
> 
> __Explanation:__ The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.

<br>

#### Constraints:

- <code>promise1</code> and <code>promise2</code> are promises that resolve with a number
