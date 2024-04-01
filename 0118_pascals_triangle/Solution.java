class Solution {
    public List<List<Integer>> generate(int numRows) {
        List<List<Integer>> triangle = new ArrayList<List<Integer>>();
        List<Integer> last = new ArrayList<>();

        for (int x = 0; x < numRows; x++) {
            List<Integer> temp = new ArrayList<>();

            for (int z = 0; z <= x; z++) {
                if (z == 0 || z == x) {
                    temp.add(1);
                    continue;
                }

                temp.add(last.get(z) + last.get(z - 1));
            }

            last = new ArrayList<>(temp);
            triangle.add(temp);
        }

        return triangle;
    }
}
