// Return true if the robot returns to the origin after it finishes all of its moves

class Solution {
    public boolean judgeCircle(String moves) {
        int r = 0;
        int l = 0;
        int u = 0;
        int d = 0;

        for (char m : moves.toCharArray()) {
            if (m == 'R') { r++; }
            else if (m == 'L') { l++; }
            else if (m == 'U') { u++; }
            else { d++; }
        }

        return (r == l) && (u == d);
    }
}
