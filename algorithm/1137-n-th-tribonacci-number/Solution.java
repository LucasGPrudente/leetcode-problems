// Return the value of position X in the sequence (Tribonacci Number)

class Solution {
    public int tribonacci(int n) {
        int[] sequence = new int[] { 0, 1, 1 };

        if (n <= 2) return sequence[n];

        for (int i = 3; i <= n; i++) {
            int nextNum = sequence[0] + sequence[1] + sequence[2];
            sequence[0] = sequence[1];
            sequence[1] = sequence[2];
            sequence[2] = nextNum;
        }

        return sequence[2];
    }
}
