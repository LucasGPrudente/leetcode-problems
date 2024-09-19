// Return the amount of money that you have to pay in taxe

class Solution {
    public double calculateTax(int[][] brackets, int income) {
        if (income == 0) {
            return 0;
        }

        if (income < brackets[0][0]) {
            return income * ((double) brackets[0][1] / 100);
        }

        double amount = brackets[0][0] * ((double) brackets[0][1] / 100);

        income -= brackets[0][0];

        for (int i = 1; income > 0 && i < brackets.length; i++) {
            int value = brackets[i][0] - brackets[i - 1][0];

            amount += (income < value ? income : value) * ((double) brackets[i][1] / 100);

            income -= value;
        }

        return amount;
    }
}