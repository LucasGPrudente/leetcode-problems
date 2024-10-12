// Return the maximum profit you can achieve from this transaction

class Solution {
    public int maxProfit(int[] prices) {
        int pro = 0;
        int buy = prices[0];

        for (int i = 1; i < prices.length; i++) {
            if (prices[i] < buy) {
                buy = prices[i];
            } else if (prices[i] - buy > pro) {
                pro = prices[i] - buy;
            }
        }

        return pro;
    }
}