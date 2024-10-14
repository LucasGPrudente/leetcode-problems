// Return the maximum possible score you can attain after applying exactly k operations

class Solution {
    public long maxKelements(int[] nums, int k) {
        PriorityQueue<Integer> heap = new PriorityQueue<>((a, b) -> b - a);

        for (int num : nums) {
            heap.add(num);
        }

        long score = 0;

        while (k > 0) {
            int max = heap.poll();

            score += max;
            heap.add((int) Math.ceil(max / 3.0));
            k--;
        }

        return score;
    }
}