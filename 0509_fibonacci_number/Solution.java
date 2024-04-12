class Solution {
    public int fib(int n) {
        int[] fibonacci = { 0, 1 };
        int nextNum = 0;

        if (n <= 1) return fibonacci[n];

        for (int i = 0; i < n; i++) {
            nextNum = fibonacci[0] + fibonacci[1];
            fibonacci[0] = fibonacci[1];
            fibonacci[1] = nextNum;
        }

        return fibonacci[0];
    }
}
