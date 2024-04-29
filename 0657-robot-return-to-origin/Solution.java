class Solution {
    public boolean judgeCircle(String moves) {
        int r = 0, l = 0, u = 0, d = 0;

        for (char m : moves.toCharArray()) {
            if (m == 'R') r++;
            else if (m == 'L') l++;
            else if (m == 'U') u++;
            else d++;
        }

        return (r == l) && (u == d);
    }
}
