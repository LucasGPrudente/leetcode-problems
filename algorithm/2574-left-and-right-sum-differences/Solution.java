// Return the array answer, where answer[i] = |leftSum[i] - rightSum[i]|

class Solution {
    public int[] leftRightDifference(int[] nums) {
        int length = nums.length;
        int[] answer = new int[length];
        int[] leftSum = new int[length];
        int[] rightSum = new int[length];

        for (int i = 1; i < length; i++) {
            leftSum[i] = nums[i - 1] + leftSum[i - 1];
        }

        for (int i = length - 2; i >= 0; i--) {
            rightSum[i] = nums[i + 1] + rightSum[i + 1];
        }

        for (int i = 0; i < length; i++) {
            answer[i] = Math.abs(leftSum[i] - rightSum[i]);
        }

        return answer;
    }
}
