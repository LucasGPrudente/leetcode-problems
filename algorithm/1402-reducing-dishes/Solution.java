class Solution {
    public int maxSatisfaction(int[] satisfaction) {
        int[] arr = satisfaction.clone();
        int length = arr.length;
        int max = 0;

        Arrays.sort(arr);

        // Only negative satisfaction level
        if (arr[0] < 0 && arr[length - 1] < 0) {
            return 0;
        }

        // Only positive satisfaction level
        if (arr[0] >= 0 && arr[length - 1] >= 0) {
            return calcSatisfaction(arr);
        }

        // Both satisfaction level
        for (int i = 0; i < length; i++) {
            int coeff = calcSatisfaction(Arrays.copyOfRange(arr, i, length));

            if (coeff > max) {
                max = coeff;
            }

            if (coeff < max && max != 0) {
                break;
            }
        }

        return max;
    }

    public int calcSatisfaction(int[] arr) {
        int sum = 0;
        int time = 1;

        for (int x : arr) {
            sum += x * time;
            time += 1;
        }

        return sum;
    }
}
