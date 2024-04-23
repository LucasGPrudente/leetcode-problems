// Return the highest altitude

class Solution {
    public int largestAltitude(int[] gain) {
        int high = 0;
        int currAlt = 0;

        for (int x : gain) {
            currAlt += x;
            high = (currAlt > high) ? currAlt : high;
        }

        return high;
    }
}
