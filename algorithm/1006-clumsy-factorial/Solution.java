// Return the clumsy factorial of n

class Solution {
    public int clumsy(int n) {
        if (n <= 2) { return n; }
        if (n <= 3) { return 6; }

        int res = n-- * n-- / n--;
        res += n--;

        while (n > 3) {
            res -= n-- * n-- / n--;
            res += n--;
        }

        res -= (n <= 2) ? n : 6;

        return res;
    }
}