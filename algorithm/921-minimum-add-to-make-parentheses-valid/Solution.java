// Return the minimum number of moves required to make s valid

class Solution {
    public int minAddToMakeValid(String s) {
        int ope = 0;
        int clo = 0;

        for (char c : s.toCharArray()) {
            if (c == '(') {
                ope++;
            } else {
                if (ope > 0) {
                    ope--;
                } else {
                    clo++;
                }
            }
        }

        return ope + clo;
    }
}
