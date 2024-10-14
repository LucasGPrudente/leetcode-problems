## [2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers)

<code>Medium</code> <code>Linked List</code> <code>Math</code> <code>Recursion</code>

<br>

You are given two __non-empty__ linked lists representing two non-negative integers. The digits are stored in __reverse order__, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

<br>

#### Example 1:

![image](https://github.com/user-attachments/assets/f2829e81-779c-49ee-9487-9b9dd6452146)

> __Input:__ l1 = [2,4,3], l2 = [5,6,4]
>
> __Output:__ [7,0,8]
>
> __Explanation:__ 342 + 465 = 807.

#### Example 2:

> __Input:__ l1 = [0], l2 = [0]
>
> __Output:__ [0]

#### Example 3:

> __Input:__ l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
>
> __Output:__ [8,9,9,9,0,0,0,1]

<br>

#### Constraints:

- The number of nodes in each linked list is in the range <code>[1, 100]</code>.
- <code>0 <= Node.val <= 9</code>
- It is guaranteed that the list represents a number that does not have leading zeros.
