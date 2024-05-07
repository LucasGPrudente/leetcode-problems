## [682. Baseball Game](https://leetcode.com/problems/baseball-game)

<code>Easy</code> <code>Array</code> <code>Stack</code> <code>Simulation</code>

<br>

You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

You are given a list of strings <code>operations</code>, where <code>operations[i]</code> is the <code>i<sup>th</sup></code> operation you must apply to the record and is one of the following:

- An integer <code>x</code>.
  - Record a new score of <code>x</code>.
- A string <code>'+'</code>.
  - Record a new score that is the sum of the previous two scores.
- A string <code>'D'</code>.
  - Record a new score that is the double of the previous score.
- A string <code>'C'</code>.
  - Invalidate the previous score, removing it from the record.

Return *the sum of all the scores on the record after applying all the operations*.

The test cases are generated such that the answer and all intermediate calculations fit in a __32-bit__ integer and that all operations are valid.

<br>

#### Example 1:

> __Input:__ ops = ["5","2","C","D","+"]
> 
> __Output:__ 30
> 
> __Explanation:__  
> "5" - Add 5 to the record, record is now [5].  
> "2" - Add 2 to the record, record is now [5, 2].  
> "C" - Invalidate and remove the previous score, record is now [5].  
> "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].  
> "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].  
> The total sum is 5 + 10 + 15 = 30.  

#### Example 2:

> __Input:__ ops = ["5","-2","4","C","D","9","+","+"]
> 
> __Output:__ 27  
> 
> __Explanation:__  
> "5" - Add 5 to the record, record is now [5].  
> "-2" - Add -2 to the record, record is now [5, -2].  
> "4" - Add 4 to the record, record is now [5, -2, 4].  
> "C" - Invalidate and remove the previous score, record is now [5, -2].  
> "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].  
> "9" - Add 9 to the record, record is now [5, -2, -4, 9].  
> "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].  
> "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].  
> The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.  

#### Example 3:

> __Input:__ ops = ["1","C"]
> 
> __Output:__ 0
> 
> __Explanation:__
> "1" - Add 1 to the record, record is now [1].  
> "C" - Invalidate and remove the previous score, record is now [].  
> Since the record is empty, the total sum is 0.  
 
<br>

#### Constraints:

- <code>1 <= operations.length <= 1000</code>
- <code>operations[i]</code> is <code>"C"</code>, <code>"D"</code>, <code>"+"</code>, or a string representing an integer in the range <code>[-3 * 104, 3 * 104]</code>.
- For operation <code>"+"</code>, there will always be at least two previous scores on the record.
- For operations <code>"C"</code> and <code>"D"</code>, there will always be at least one previous score on the record.
