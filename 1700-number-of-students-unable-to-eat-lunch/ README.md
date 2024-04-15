## [1700. Number of Students Unable to Eat Lunch](https://leetcode.com/problems/number-of-students-unable-to-eat-lunch/)

<code>Easy</code>

<br>

The school cafeteria offers circular and square sandwiches at lunch break, referred to by numbers <code>0</code> and <code>1</code> respectively. All students stand in a queue. Each student either prefers square or circular sandwiches.

The number of sandwiches in the cafeteria is equal to the number of students. The sandwiches are placed in a __stack__. At each step:

- If the student at the front of the queue __prefers__ the sandwich on the top of the stack, they will __take it__ and leave the queue.
- Otherwise, they will __leave it__ and go to the queue's end.

This continues until none of the queue students want to take the top sandwich and are thus unable to eat.

You are given two integer arrays <code>students</code> and <code>sandwiches</code> where <code>sandwiches[i]</code> is the type of the <code>i<sup>​​​​​​th</sup></code> sandwich in the stack (<code>i = 0</code> is the top of the stack) and <code>students[j]</code> is the preference of the <code>j<sup>​​​​​​th</sup></code> student in the initial queue (<code>j = 0</code> is the front of the queue). Return the number of students that are unable to eat.

<br>

#### Example 1:

> __Input:__ students = [1,1,0,0], sandwiches = [0,1,0,1]  
> __Output:__ 0  
> __Explanation:__  
> - Front student leaves the top sandwich and returns to the end of the line making students = [1,0,0,1].  
> - Front student leaves the top sandwich and returns to the end of the line making students = [0,0,1,1].  
> - Front student takes the top sandwich and leaves the line making students = [0,1,1] and sandwiches = [1,0,1].  
> - Front student leaves the top sandwich and returns to the end of the line making students = [1,1,0].  
> - Front student takes the top sandwich and leaves the line making students = [1,0] and sandwiches = [0,1].  
> - Front student leaves the top sandwich and returns to the end of the line making students = [0,1].  
> - Front student takes the top sandwich and leaves the line making students = [1] and sandwiches = [1].  
> - Front student takes the top sandwich and leaves the line making students = [] and sandwiches = [].  
> - Hence all students are able to eat.  

#### Example 2:

> __Input:__ students = [1,1,1,0,0,1], sandwiches = [1,0,0,0,1,1]  
> __Output:__ 3  

<br>

#### Constraints:

- <code>1 <= students.length, sandwiches.length <= 100</code>
- <code>students.length == sandwiches.length</code>
- <code>sandwiches[i]</code> is <code>0</code> or <code>1</code>.
- <code>students[i]</code> is <code>0</code> or <code>1</code>.
