// Remove the n-th node from the end of the list and return its head

/**
 * Definition for singly-linked list.
 *
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        if (head.next == null) { return null; }

        if (sizeOfListNode(head) == n) { return head.next; }

        ListNode prev = head;
        ListNode curr = head;
        ListNode tail = head;

        for (int i = 1; i < n; i++) {
            tail = tail.next;
        }

        while (tail.next != null) {
            prev = curr;
            curr = curr.next;
            tail = tail.next;
        }

        prev.next = curr.next;

        return head;
    }

    public int sizeOfListNode(ListNode head) {
        int sz = 0;

        while (head != null) {
            head = head.next;
            sz++;
        }

        return sz;
    }
}