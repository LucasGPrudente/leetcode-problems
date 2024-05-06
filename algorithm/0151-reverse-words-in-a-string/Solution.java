// Return a string of the words in reverse order concatenated by a single space

class Solution {
    public String reverseWords(String str) {
        String phase = str.trim().replaceAll(" +", " ");
        String[] words = phase.split(" ");

        int s = 0;
        int e = words.length - 1;
        while (s < e) {
            String temp = words[s];
            words[s] = words[e];
            words[e] = temp;

            s++;
            e--;
        }

        return String.join(" ", words);
    }
}
