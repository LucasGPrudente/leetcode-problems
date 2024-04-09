## [2073. Time Needed to Buy Tickets](https://leetcode.com/problems/time-needed-to-buy-tickets/)

<code>Easy</code>

<br>

There are <code>n</code> people in a line queuing to buy tickets, where the <code>0<sup>th</sup></code> person is at the __front__ of the line and the <code>(n - 1)<sup>th</sup></code> person is at the __back__ of the line.

You are given a __0-indexed__ integer array <code>tickets</code> of length <code>n</code> where the number of tickets that the <code>i<sup>th</sup></code> person would like to buy is <code>tickets[i]</code>.

Each person takes __exactly 1 second__ to buy a ticket. A person can only buy __1 ticket at a time__ and has to go back to __the end__ of the line (which happens __instantaneously__) in order to buy more tickets. If a person does not have any tickets left to buy, the person will __leave__ the line.

Return the __time taken__ for the person at position <code>k</code> __(0-indexed)__ to finish buying tickets.

<br>

#### Example 1:

> __Input:__ tickets = [2,3,2], k = 2  
> __Output:__ 6  
> __Explanation:__   
> - In the first pass, everyone in the line buys a ticket and the line becomes [1, 2, 1].  
> - In the second pass, everyone in the line buys a ticket and the line becomes [0, 1, 0].  
> - The person at position 2 has successfully bought 2 tickets and it took 3 + 3 = 6 seconds.  

#### Example 2:

> __Input:__ tickets = [5,1,1,1], k = 0  
> __Output:__ 8  
> __Explanation:__  
> - In the first pass, everyone in the line buys a ticket and the line becomes [4, 0, 0, 0].  
> - In the next 4 passes, only the person in position 0 is buying tickets.  
> - The person at position 0 has successfully bought 5 tickets and it took 4 + 1 + 1 + 1 + 1 = 8 seconds.  

<br>

#### Constraints:

- <code>n == tickets.length</code>
- <code>1 <= n <= 100</code>
- <code>1 <= tickets[i] <= 100</code>
- <code>0 <= k < n</code>
