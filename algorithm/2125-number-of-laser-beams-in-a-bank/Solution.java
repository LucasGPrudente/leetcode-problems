// Return the total number of laser beams in the bank

class Solution {
    public int numberOfBeams(String[] bank) {
        int count = 0;
        int previous = 0;

        for (String floor : bank) {
            int one = 0;

            for (char cell : floor.toCharArray()) {
                if (cell == '1') {
                    one++;
                }
            }

            if (one > 0) {
                count += one * previous;
                previous = one;
            }
        }

        return count;
    }
}