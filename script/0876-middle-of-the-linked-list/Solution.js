// Return the middle node of the linked list

/**
 * Definition for singly-linked list.
 *
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var middleNode = function (head) {
    let temp = head;
    let size = 0;

    while (temp != null) {
        size++;
        temp = temp.next;
    }

    for (let mid = parseInt(size / 2); mid > 0; mid--) {
        head = head.next;
    }

    return head;
};