// Return the head of the modified linked list

/**
 * Definition for singly-linked list.
 *
 * public class ListNode {
 *      int val;
 *      ListNode next;
 *      ListNode() {}
 *      ListNode(int val) { this.val = val; }
 *      ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode mergeNodes(ListNode head) {
        ListNode cur = head.next;
        ListNode hdr = head.next;

        int sum = 0;

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
    }
}