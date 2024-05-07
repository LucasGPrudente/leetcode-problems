// Return the array in the form [x1,y1,x2,y2,...,xn,yn]

class Solution {
    public int[] shuffle(int[] nums, int n) {
        int[] newArr = new int[n * 2];

        int i = 0;
        int j = 0;
        while (i < n && j < n * 2) {
            newArr[j] = nums[i];
            newArr[j + 1] = nums[i + n];

            i += 1;
            j += 2;
        }

        return newArr;
    }
}
