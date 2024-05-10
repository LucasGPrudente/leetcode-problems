// Increment the large integer by one and return the resulting array of digits

class Solution {
    public int[] plusOne(int[] digits) {
        int length = digits.length;

        for (int i = length - 1; i >= 0; i--) {
            digits[i]++;

            if (digits[i] > 9) { digits[i] = 0; } 
            else { return digits; }
        }

        int[] newDigits = new int[length + 1];

        newDigits[0] = 1;

        return newDigits;
    }
}
