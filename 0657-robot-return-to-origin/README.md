## [657. Robot Return to Origin](https://leetcode.com/problems/robot-return-to-origin/)

<code>Easy</code> <code>String</code> <code>Simulation</code>

<br>

There is a robot starting at the position <code>(0, 0)</code>, the origin, on a 2D plane. Given a sequence of its moves, judge if this __robot ends up at__ <code>(0, 0)</code> after it completes its moves.

You are given a string <code>moves</code> that represents the move sequence of the robot where <code>moves[i]</code> represents its <code>i<sup>th</sup></code> move. Valid moves are <code>'R'</code> (right), <code>'L'</code> (left), <code>'U'</code> (up), and <code>'D'</code> (down).

Return <code>true</code> *if the robot returns to the origin after it finishes all of its moves, or* <code>false</code> *otherwise*.

__Note:__ The way that the robot is "facing" is irrelevant. <code>'R'</code> will always make the robot move to the right once, <code>'L'</code> will always make it move left, etc. Also, assume that the magnitude of the robot's movement is the same for each move.

<br>

#### Example 1:

> __Input:__ moves = "UD"
>  
> __Output:__ true
> 
> __Explanation:__ The robot moves up once, and then down once. All moves have the same magnitude, so it ended up at the origin where it started. Therefore, we return true.  

#### Example 2:

> __Input:__ moves = "LL"
>  
> __Output:__ false
> 
> __Explanation:__ The robot moves left twice. It ends up two "moves" to the left of the origin. We return false because it is not at the origin at the end of its moves.  

<br>

#### Constraints:

- <code>1 <= moves.length <= 2 * 10<sup>4</sup></code>
- <code>moves</code> only contains the characters <code>'U'</code>, <code>'D'</code>, <code>'L'</code> and <code>'R'</code>.
