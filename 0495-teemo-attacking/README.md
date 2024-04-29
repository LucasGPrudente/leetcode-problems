## [495. Teemo Attacking](https://leetcode.com/problems/teemo-attacking/)

<code>Easy</code>

<br>

Our hero Teemo is attacking an enemy Ashe with poison attacks! When Teemo attacks Ashe, Ashe gets poisoned for a exactly <code>duration</code> seconds. More formally, an attack at second <code>t</code> will mean Ashe is poisoned during the __inclusive__ time interval <code>[t, t + duration - 1]</code>. If Teemo attacks again __before__ the poison effect ends, the timer for it is __reset__, and the poison effect will end <code>duration</code> seconds after the new attack.

You are given a __non-decreasing__ integer array <code>timeSeries</code>, where <code>timeSeries[i]</code> denotes that Teemo attacks Ashe at second <code>timeSeries[i]</code>, and an integer <code>duration</code>.

Return the __total__ number of seconds that Ashe is poisoned.

<br>

#### Example 1:

> __Input:__ timeSeries = [1,4], duration = 2  
> __Output:__ 4  
> __Explanation:__ Teemo's attacks on Ashe go as follows:  
> - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.  
> - At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.  
> - Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.  

#### Example 2:

> __Input:__ timeSeries = [1,2], duration = 2  
> __Output:__ 3  
> __Explanation:__ Teemo's attacks on Ashe go as follows:  
> - At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.  
> - At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.  
> - Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.  

<br>

#### Constraints:

- <code>1 <= timeSeries.length <= 10<sup>4</sup></code>
- <code>0 <= timeSeries[i], duration <= 10<sup>7</sup></code>
- <code>timeSeries</code> is sorted in __non-decreasing__ order.
