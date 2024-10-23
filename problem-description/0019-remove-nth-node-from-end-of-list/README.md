## [19. Remove Nth Node From End of List](https://leetcode.com/problems/remove-nth-node-from-end-of-list)

<code>Medium</code> <code>Linked List</code> <code>Two Pointers</code>

<br>

Given the <code>head</code> of a linked list, remove the <code>n<sup>th</sup></code> node from the end of the list and return its head.

<br>

#### Example 1:

![image](https://github.com/user-attachments/assets/59317d74-f2bd-4713-b851-81809413903f)

> __Input:__ head = [1,2,3,4,5], n = 2
> 
> __Output:__ [1,2,3,5] 

#### Example 2:

> __Input:__ head = [1], n = 1
> 
> __Output:__ []

#### Example 3:

> __Input:__ head = [1,2], n = 1
> 
> __Output:__ [1]

<br>

#### Constraints:

- The number of nodes in the list is <code>sz</code>.
- <code>1 <= sz <= 30</code>
- <code>0 <= Node.val <= 100</code>
- <code>1 <= n <= sz</code>
