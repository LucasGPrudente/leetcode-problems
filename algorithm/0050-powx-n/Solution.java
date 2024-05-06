// Implement pow(x, n), which calculates x raised to the power n

class Solution {
    public double myPow(double x, int n) {
        if (x == 0 || x == 1 || x == 0.00001 || n == 1) {
            return x;
        }
        
        if (n == 0) {
            return 1;
        }

        double pow = 1;
        long exp = n;

        if (exp < 0) {
            exp *= -1;
        }

        while (exp > 0) {
            if (exp % 2 == 0) {
                x *= x;
                exp = exp / 2;
            } else {
                pow *= x;
                exp--;
            }
        }

        if (n > 0) {
            return pow;
        }

        return 1 / pow;
    }
}

// return Math.pow(x, n);
