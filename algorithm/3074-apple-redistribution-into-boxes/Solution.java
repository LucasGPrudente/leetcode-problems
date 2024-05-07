// Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes

class Solution {
    public int minimumBoxes(int[] apple, int[] capacity) {
        Arrays.sort(capacity);

        int minBoxes = 0;
        int numApple = 0;

        for (int x : apple) {
            numApple += x;
        }

        for (int i = capacity.length - 1; i >= 0 && numApple > 0; i--) {
            numApple -= capacity[i];
            minBoxes += 1;
        }

        return minBoxes;
    }
}
