// Return how many of the stones are also jewels

class Solution {
    public int numJewelsInStones(String jewels, String stones) {
        int numOfJewels = 0;

        for (char c : stones.toCharArray()) {
            if (jewels.indexOf(c) > -1) { numOfJewels++; }
        }

        return numOfJewels;
    }
}
