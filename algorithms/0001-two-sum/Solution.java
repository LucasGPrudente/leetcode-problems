class Solution {
    public int[] twoSum(int[] nums, int target) {
        int[] indexOfNums = new int[2];
        Map<Integer, Integer> map = new HashMap<>();

        for (int i = 0; i < nums.length; i++) {
            int n = nums[i];

            if (map.containsKey(n)) {
                indexOfNums = new int[] { map.get(n), i };
                break;
            }

            map.put(target - n, i);
        }

        return indexOfNums;
    }
}
