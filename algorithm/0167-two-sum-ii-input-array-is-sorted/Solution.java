// Find two numbers such that they add up to a specific target number

class Solution {
    public int[] twoSum(int[] nums, int tgt) {
        int[] ans = new int[] {-1, -1};

        int s = 0;
        int e = nums.length - 1;

        while (s < e) {
            if (nums[s] + nums[e] == tgt) {
                ans[0] = s + 1;
                ans[1] = e + 1;
                
                break;
            } else if (nums[s] + nums[e] > tgt) {
                e--;
            } else {
                s++;
            }
        }

        return ans;
    }
}
