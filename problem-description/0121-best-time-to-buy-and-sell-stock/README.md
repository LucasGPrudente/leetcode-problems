## [121. Best Time to Buy and Sell Stock](https://leetcode.com/problems/best-time-to-buy-and-sell-stock)

<code>Easy</code> <code>Array</code> <code>Dynamic Programming</code>

<br>

You are given an array <code>prices</code> where <code>prices[i]</code> is the price of a given stock on the <code>i<sup>th</sup></code> day.

You want to maximize your profit by choosing a __single day__ to buy one stock and choosing a __different day in the future__ to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return <code>0</code>.

<br>

#### Example 1:

> __Input:__ prices = [7,1,5,3,6,4]
> 
> __Output:__ 5
> 
> __Explanation:__ Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.  
Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell. 

#### Example 2:

> __Input:__ prices = [7,6,4,3,1]
>  
> __Output:__ 0
> 
> __Explanation:__ In this case, no transactions are done and the max profit = 0.
 
<br>

#### Constraints:

- <code>1 <= prices.length <= 10<sup>5</sup></code>
- <code>0 <= prices[i] <= 10<sup>4</sup></code>
