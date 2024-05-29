// Return the total number of ways to distribute n candies among 3 children

class Solution {
    public int distributeCandies(int n, int limit) {
        int ways = 0;

        int k = 0;

        for (int i = 0; i <= limit; i++){
            for (int j = 0; j <= limit; j++){
                k = n - i - j;

                if (k >= 0 && k <= limit){
                    ways++;
                }
            }
        }

        return ways;
    }
}
