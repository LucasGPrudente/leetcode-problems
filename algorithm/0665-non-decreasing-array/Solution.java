// Check if the array could become non-decreasing by modifying at most one element

class Solution {
    public boolean checkPossibility(int[] arr) {
        int length = arr.length;

        for (int i = 0; i < length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                int[] arrNone = new int[length - 1];
                int[] arrSome = new int[length - 1];

                for (int j = 0, k = 0, l = 0; j < length; j++) {
                    if (j != i) {
                        arrNone[k++] = arr[j];
                    }

                    if (j != i + 1) {
                        arrSome[l++] = arr[j];
                    }
                }

                boolean noneIsAsc = true;
                boolean someIsAsc = true;

                for (int j = 0; j < length - 2; j++) {
                    if (arrNone[j] > arrNone[j + 1]) {
                        noneIsAsc = false;
                    }

                    if (arrSome[j] > arrSome[j + 1]) {
                        someIsAsc = false;
                    }
                    
                    if (noneIsAsc == false && someIsAsc == false) {
                        break;
                    }
                }

                return noneIsAsc || someIsAsc;
            }
        }

        return true;
    }
}
