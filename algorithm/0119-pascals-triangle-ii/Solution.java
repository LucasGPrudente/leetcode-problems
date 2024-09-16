// Return the rowIndex-th row of the Pascal's triangle

class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>();

        row.add(1);

        for (int t = 1; t <= rowIndex; t++) {
            List<Integer> cur = new ArrayList<>();

            cur.add(1);

            for (int i = 1; i < row.size(); i++) {
                cur.add(row.get(i) + row.get(i - 1));
            }

            cur.add(1);

            row = new ArrayList<>(cur);
        }

        return row;
    }
}