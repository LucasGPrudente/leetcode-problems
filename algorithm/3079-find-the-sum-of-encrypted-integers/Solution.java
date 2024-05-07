// Return the sum of encrypted elements

class Solution {
    public int sumOfEncryptedInt(int[] nums) {
        int sum = 0;

        for (int n : nums) {
            int lgth = 0;
            int larg = 0;

            while (n > 0) {
                int dig = n % 10;

                if (dig > larg) {
                    larg = dig;
                }

                n /= 10;
                lgth++;
            }

            // pl represents place value
            for (int i = 0, pl = 1; i < lgth; i++, pl *= 10) {
                sum += larg * pl;
            }
        }

        return sum;
    }
}
