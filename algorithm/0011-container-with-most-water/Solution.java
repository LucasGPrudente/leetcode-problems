// Return the maximum amount of water a container can store

class Solution {
    public int maxArea(int[] height) {
        int lt = 0;
        int rt = height.length - 1;

        int maxArea = (rt - lt) * Math.min(height[lt], height[rt]);

        while (lt < rt) {
            if (height[lt] > height[rt]) {
                rt--;
            } else {
                lt++;
            }

            int currArea = (rt - lt) * Math.min(height[lt], height[rt]);

            maxArea = Math.max(maxArea, currArea);
        }

        return maxArea;
    }
}