## [841. Keys and Rooms](https://leetcode.com/problems/keys-and-rooms)

<code>Medium</code> <code>Depth-First Search</code> <code>Breadth-First Search</code> <code>Graph</code>

<br>

There are <code>n</code> rooms labeled from <code>0</code> to <code>n - 1</code> and all the rooms are locked except for room <code>0</code>. Your goal is to visit all the rooms. However, you cannot enter a locked room without having its key.

When you visit a room, you may find a set of __distinct keys__ in it. Each key has a number on it, denoting which room it unlocks, and you can take all of them with you to unlock the other rooms.

Given an array <code>rooms</code> where <code>rooms[i]</code> is the set of keys that you can obtain if you visited room <code>i</code>, return <code>true</code> *f you can visit __all__ the rooms, or* <code>false</code> *otherwise*.

<br>

#### Example 1:

> __Input:__ rooms = [[1],[2],[3],[]]
> 
> __Output:__ true
> 
> __Explanation:__   
> We visit room 0 and pick up key 1.  
> We then visit room 1 and pick up key 2.  
> We then visit room 2 and pick up key 3.  
> We then visit room 3.  
> Since we were able to visit every room, we return true.  

#### Example 2:

> __Input:__ rooms = [[1,3],[3,0,1],[2],[0]]
> 
> __Output:__ false
> 
> __Explanation:__ We can not enter room number 2 since the only key that unlocks it is in that room.  

<br>

#### Constraints:

- <code>n == rooms.length</code>
- <code>2 <= n <= 1000</code>
- <code>0 <= rooms[i].length <= 1000</code>
- <code>1 <= sum(rooms[i].length) <= 3000</code>
- <code>0 <= rooms[i][j] < n</code>
- All the values of <code>rooms[i]</code> are __unique__.
