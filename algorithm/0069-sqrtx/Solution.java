// Return the square root of x rounded down to the nearest integer

class Solution {
    public int mySqrt(int x) {
        long sqrt = x;

        while (sqrt * sqrt > x) {
            sqrt /= 2;
        }

        while (sqrt * sqrt <= x) {
            sqrt++;
        }

        return (int) sqrt - 1;
    }
}
