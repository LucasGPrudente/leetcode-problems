// Return the sum of the digits of x

class Solution {
    public int sumOfTheDigitsOfHarshadNumber(int x) {
        int num = x;
        int sum = 0;

        while(num > 0){
            sum += num % 10;
            num /= 10;
        }

        return (x % sum == 0) ? sum : -1;
    }
}
