// Return the difference between the product of its digits and the sum of its digits

class Solution {
    public int subtractProductAndSum(int n) {
        int pro = 1;
        int sum = 0;

        while (n > 0) {
            int dig = n % 10;
            pro *= dig;
            sum += dig;
            n /= 10;
        }

        return pro - sum;
    }
}
