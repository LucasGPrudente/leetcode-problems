// Return the sum of the frequencies of the elements with the highest frequency in nums

class Solution {
    public int maxFrequencyElements(int[] nums) {
        int[] elem = new int[101];

        int maxFreq = 0;
        int occurr = 0;

        for (int n : nums) {
            elem[n]++;

            if (elem[n] > maxFreq) {
                maxFreq = elem[n];
            }
        }

        for (int freq : elem) {
            if (freq == maxFreq) {
                occurr++;
            }
        }

        return maxFreq * occurr;
    }
}
