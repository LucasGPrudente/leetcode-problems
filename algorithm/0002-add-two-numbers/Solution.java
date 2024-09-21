// Add the two numbers and return the sum as a linked list

/**
 * Definition for singly-linked list.
 * public class ListNode {
 * int val;
 * ListNode next;
 * ListNode() {}
 * ListNode(int val) { this.val = val; }
 * ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */

class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode head = new ListNode();
        ListNode tail = head;

        int res = 0;

        while (l1 != null || l2 != null) {
            int sum = res;

            if (l1 != null) { sum += l1.val; }
            if (l2 != null) { sum += l2.val; }

            if (sum > 9) {
                res = sum / 10;
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
    }
}