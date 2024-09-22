// Return the quotient after dividing dividend by divisor

class Solution {
    public int divide(int dividend, int divisor) {
        if (dividend == Integer.MIN_VALUE && divisor == -1) { return 2147483647; }
        if (divisor == 1) { return dividend; }
        if (divisor == -1) { return dividend * -1; }

        long ldividend = dividend;
        long ldivisor = divisor;

        if (ldividend < 0) { ldividend *= -1; }
        if (ldivisor < 0) { ldivisor *= -1; }

        String digits = String.valueOf(ldividend);

        long quotient = 0;
        long current = 0;

        for (int i = 0; i < digits.length(); i++) {
            current = (current * 10) + (digits.charAt(i) - '0');

            int t = 0;

            if (current == ldivisor) {
                t = 1;
                current = 0;
            } else if (current > ldivisor) {
                while (current - ldivisor >= 0) {
                    current -= ldivisor;
                    t++;
                }
            }

            quotient = (quotient * 10) + t;
        }

        return (dividend < 0 == divisor < 0) ? (int) quotient : (int) quotient * -1;
    }
}