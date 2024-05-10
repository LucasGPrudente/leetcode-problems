// Find the only number that does not repeat

class Solution {
    public int singleNumber(int[] nums) {
        int single = 0;

        for (int num : nums) {
            single ^= num;
        }

        return single;
    }
}
