// Return the smallest positive integer that is a multiple of both 2 and n

class Solution {
    public int smallestEvenMultiple(int n) {
        if (n % 2 == 0) {
            return n;
        }

        return n * 2;
    }
}
