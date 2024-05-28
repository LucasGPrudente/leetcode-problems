// Compress the array by grouping consecutive repeated characters

class Solution {
    public int compress(char[] chars) {
        int i = 0;
        int j = 0;

        while (i < chars.length) {
            char c = chars[i];
            int t = 0;

            while (i < chars.length && chars[i] == c) {
                t++;
                i++;
            }

            chars[j++] = c;

            if (t > 1 && j < chars.length) {
                for (char n : String.valueOf(t).toCharArray()) {
                    chars[j++] = n;
                }
            }
        }

        return j;
    }
}
