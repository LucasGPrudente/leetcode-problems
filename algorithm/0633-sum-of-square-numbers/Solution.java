// Return whether there are two integers a and b such that a2 + b2 = c

class Solution {
    public boolean judgeSquareSum(int c) {
        long a = 0;
        long b = 0;

        long s = 1;
        long e = c;

        while (s <= e) {
            b = s + (e - s) / 2;

            if (b * b == c) {
                return true;
            } else if (b * b > c) {
                e = b - 1;
            } else {
                s = b + 1;
            }
        }

        while (a <= b) {
            long sum = (a * a) + (b * b);

            if (sum == c) {
                return true;
            } else if (sum > c) {
                b--;
            } else {
                a++;
            }
        }

        return false;
    }
}
