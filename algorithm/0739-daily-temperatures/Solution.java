// Return how many days to a warmer temperature for each day

class Solution {
    public int[] dailyTemperatures(int[] temps) {
        int l = temps.length;

        int[] ans = new int[l];
        int[] day = new int[l];

        int sz = 0;

        for (int i = 0; i < l; i++) {
            while (sz > -1 && temps[i] > temps[day[sz]]) {
                ans[day[sz]] = i - day[sz--];
            }

            sz++;
            day[sz] = i;
        }

        return ans;
    }
}
