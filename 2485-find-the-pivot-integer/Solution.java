// Return the pivot integer x

class Solution {
    public int pivotInteger(int n) {
        int num = 0;
        int sum = 0;

        for (int z = 1; z <= n; z++) {
            sum += z;
        }

        for (int x = 1; x <= n; x++) {
            num += x;

            if (num == sum) { return x; }

            sum -= x;
        }

        return -1;
    }
}
