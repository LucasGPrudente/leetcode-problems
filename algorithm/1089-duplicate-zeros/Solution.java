// Duplicate each occurrence of zero, shifting the remaining elements to the right

class Solution {
    public void duplicateZeros(int[] arr) {
        int[] newArr = new int[arr.length];

        for (int i = 0, j = 0; j < arr.length; i++, j++) {
            if (arr[i] == 0) { j++; } 
            else { newArr[j] = arr[i]; }
        }

        for (int i = 0; i < arr.length; i++) {
            arr[i] = newArr[i];
        }
    }
}
