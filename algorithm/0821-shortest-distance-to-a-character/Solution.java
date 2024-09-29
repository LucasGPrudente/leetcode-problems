// Return an array ans where ans[i] is the distance from index i to the closest occurrence of character c in s

class Solution {
    public int[] shortestToChar(String s, char c) {
        int len = s.length();

        char[] chr = s.toCharArray();
        int[] ans = new int[len];

        Arrays.fill(ans, len);

        for (int i = 0; i < len; i++) {
            if (chr[i] == c) {
                ans[i] = 0;

                for (int j = i - 1, d = 1; j > -1; j--, d++) {
                    if (ans[j] <= d) { break; }

                    ans[j] = d;
                }

                for (int j = i + 1, d = 1; j < len; j++, d++) {
                    if (ans[j] <= d) { break; }

                    ans[j] = d;
                }
            }
        }

        return ans;
    }
}