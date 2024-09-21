// Remove the n-th node from the end of the list and return its head

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

var removeNthFromEnd = function (head, n) {
    if (head.next == null) { return null; }

    if (sizeOfListNode(head) == n) { return head.next; }

    let prev = head;
    let curr = head;
    let tail = head;

    for (let i = 1; i < n; i++) {
        tail = tail.next;
    }

    while (tail.next != null) {
        prev = curr;
        curr = curr.next;
        tail = tail.next;
    }

    prev.next = curr.next;

    return head;

    function sizeOfListNode(head) {
        let sz = 0;

        while (head != null) {
            head = head.next;
            sz++;
        }

        return sz;
    }
};