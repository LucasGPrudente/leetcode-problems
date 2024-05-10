// Determine if a number n is happy

class Solution {
    public boolean isHappy(int n) {
        Set<Integer> check = new HashSet<Integer>();

        while(n > 3 && check.add(n)){
            int sum = 0;

            while (n > 0) {
                sum += (n % 10) * (n % 10);
                n /= 10;
            }

            n = sum;
        }

        return n == 1;
    }
}
