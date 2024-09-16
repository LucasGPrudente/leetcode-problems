// Sort the array in ascending order and return it

class Solution {
    public int[] sortArray(int[] nums) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;

        for (int n : nums) {
            max = Math.max(max, n);
            min = Math.min(min, n);
        }

        int range = max - min + 1;
        int[] cnt = new int[range];

        for (int n : nums) {
            cnt[n - min]++;
        }

        int[] sorted = new int[nums.length];
        int j = 0;

        for (int i = 0; i < range; i++) {
            int num = i + min;
            int frq = cnt[i];

            while (frq > 0) {
                sorted[j++] = num;
                frq--;
            }
        }

        return sorted;
    }
}
