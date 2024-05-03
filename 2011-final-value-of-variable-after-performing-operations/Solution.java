// Return the final value of X after performing all the operations

class Solution {
    public int finalValueAfterOperations(String[] operations) {
        int x = 0;

        for (String op : operations) {
            if (op.contains("+")) { x++; } 
            else { x--; }
        }

        return x;
    }
}
