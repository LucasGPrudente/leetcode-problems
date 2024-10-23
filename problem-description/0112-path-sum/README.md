## [112. Path Sum](https://leetcode.com/problems/path-sum)

<code>Easy</code> <code>Tree</code> <code>Depth-First Search</code> <code>Breadth-First Search</code> <code>Binary Tree</code>

<br>

Given the <code>root</code> of a binary tree and an integer <code>targetSum</code>, return <code>true</code> if the tree has a __root-to-leaf__ path such that adding up all the values along the path equals <code>targetSum</code>.

A __leaf__ is a node with no children.

<br>

#### Example 1:

![image](https://github.com/user-attachments/assets/abf3e6ad-8f46-4749-b636-fe2a300f5567)

> __Input:__ root = [5,4,8,11,null,13,4,7,2,null,null,null,1], targetSum = 22
> 
> __Output:__ true
> 
> __Explanation:__ The root-to-leaf path with the target sum is shown.

#### Example 2:

![image](https://github.com/user-attachments/assets/6c12e99b-8042-46d1-a5ac-13e55f30a324)

> __Input:__ root = [1,2,3], targetSum = 5
> 
> __Output:__ false
> 
> __Explanation:__ There are two root-to-leaf paths in the tree:  
(1 --> 2): The sum is 3.  
(1 --> 3): The sum is 4.  
There is no root-to-leaf path with sum = 5.  

#### Example 3:

> __Input:__ root = [], targetSum = 0
> 
> __Output:__ false
> 
> __Explanation:__ Since the tree is empty, there are no root-to-leaf paths.

<br>

#### Constraints:

- The number of nodes in the tree is in the range <code>[0, 5000]</code>.
- <code>-1000 <= Node.val <= 1000</code>
- <code>-1000 <= targetSum <= 1000</code>
