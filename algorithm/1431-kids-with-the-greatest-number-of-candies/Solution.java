// Return a boolean array result

class Solution {
    public List<Boolean> kidsWithCandies(int[] candies, int extraCandies) {
        List<Boolean> results = new ArrayList<>();
        int grtNum = 0;

        for (int x : candies) {
            if (x > grtNum) {
                grtNum = x;
            }
            ;
        }

        for (int x : candies) {
            if (x + extraCandies >= grtNum) {
                results.add(true);
            } else {
                results.add(false);
            }
        }

        return results;
    }
}
