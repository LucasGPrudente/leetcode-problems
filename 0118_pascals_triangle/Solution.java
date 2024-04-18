class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        List<Integer> lastRow = new ArrayList<>();

        for (int x = 0; x < numRows; x++) {
            List<Integer> currRow = new ArrayList<>();

            for (int z = 0; z <= x; z++) {
                if (z == 0 || z == x) {
                    currRow.add(1);
                    continue;
                }

                currRow.add(lastRow.get(z) + lastRow.get(z - 1));
            }

            lastRow = currRow;
            triangle.add(currRow);
        }

        return triangle;
    }
}
