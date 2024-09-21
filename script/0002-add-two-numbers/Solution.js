// Add the two numbers and return the sum as a linked list

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function (l1, l2) {
    let head = new ListNode();
    let tail = head;

    let res = 0;

    while (l1 != null || l2 != null) {
        let sum = res;

        if (l1 != null) { sum += l1.val; }
        if (l2 != null) { sum += l2.val; }

        if (sum > 9) {
            res = parseInt(sum / 10);
            sum = sum % 10;
        } else {
            res = 0;
        }

        tail.next = new ListNode(sum);
        tail = tail.next;

        if (l1 != null) { l1 = l1.next; }
        if (l2 != null) { l2 = l2.next; }
    }

    if (res > 0) { tail.next = new ListNode(res); }

    return head.next;
};