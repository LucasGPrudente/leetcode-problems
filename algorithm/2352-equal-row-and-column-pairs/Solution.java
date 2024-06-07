// Return the number of pairs such that row and column are equal

class Solution {
    public int equalPairs(int[][] grid) {
        int pr = 0;

        int n = grid.length;

        Map<List<Integer>, Integer> rows = new HashMap<List<Integer>, Integer>();

        for (int i = 0; i < n; i++) {
            List<Integer> row = new ArrayList<>();

            for (int j = 0; j < n; j++) {
                row.add(grid[i][j]);
            }

            rows.put(row, rows.getOrDefault(row, 0) + 1);
        }

        for (int i = 0; i < n; i++) {
            List<Integer> col = new ArrayList<>();

            for (int j = 0; j < n; j++) {
                col.add(grid[j][i]);
            }

            if (rows.get(col) != null) {
                pr += rows.get(col);
            }
        }

        return pr;
    }
}
