// Return the head of the modified linked list

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

var mergeNodes = function (head) {
    let cur = head.next;
    let hdr = head.next;

    let sum = 0;

    while (cur != null) {
        if (cur.val != 0) {
            sum += cur.val;
            cur = cur.next;
        } else {
            cur = cur.next;
            hdr.val = sum;
            hdr.next = cur;
            hdr = cur;
            sum = 0;
        }
    }

    return head.next;
};