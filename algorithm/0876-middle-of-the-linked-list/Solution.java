// Return the middle node of the linked list

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
    public ListNode middleNode(ListNode head) {
        ListNode temp = head;
        int size = 0;

        while (temp != null) {
            size++;
            temp = temp.next;
        }

        for (int mid = size / 2; mid > 0; mid--) {
            head = head.next;
        }

        return head;
    }
}