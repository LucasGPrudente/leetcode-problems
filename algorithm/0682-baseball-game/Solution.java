// Return the sum of all the scores on the record after applying all the operations

class Solution {
    public int calPoints(String[] operations) {
        int sum = 0;

        List<Integer> rec = new ArrayList<Integer>();

        for (String op : operations) {
            int size = rec.size();

            if (op.equals("+")) { rec.add(rec.get(size - 1) + rec.get(size - 2)); } 
            else if (op.equals("C")) { rec.remove(size - 1); } 
            else if (op.equals("D")) { rec.add(rec.get(size - 1) * 2); } 
            else { rec.add(Integer.parseInt(op)); }
        }

        for (int num : rec) {
            sum += num;
        }

        return sum;
    }
}
