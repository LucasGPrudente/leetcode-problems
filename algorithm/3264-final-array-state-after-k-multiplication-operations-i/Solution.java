// Return an integer array denoting the final state of nums after performing all k operations

class Solution {
    public int[] getFinalState(int[] nums, int k, int multiplier) {
        PriorityQueue<int[]> heap = new PriorityQueue<>((a, b) -> (a[0] == b[0]) ? a[1] - b[1] : a[0] - b[0]);

        for (int i = 0; i < nums.length; i++) {
            heap.offer(new int[] {nums[i], i});
        }

        while (k > 0) {
            int[] temp = heap.poll();

            int num = temp[0];
            int idx = temp[1];

            nums[idx] *= multiplier;

            heap.offer(new int[] {nums[idx], idx});

            k--;
        }

        return nums;
    }
}