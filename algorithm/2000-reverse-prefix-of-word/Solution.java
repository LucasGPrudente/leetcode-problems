// Reverse the segment of word that starts at 0 and ends at n (inclusive)

class Solution {
    public String reversePrefix(String word, char ch) {
        char[] ans = word.toCharArray();

        int s = 0;
        int e = word.indexOf(ch);
        while (s < e) {
            char temp = ans[s];
            ans[s] = ans[e];
            ans[e] = temp;

            s++;
            e--;
        }

        return String.valueOf(ans);
    }
}
