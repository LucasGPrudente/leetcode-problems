class Solution {
    public String reverseWords(String s) {
        String phase = s.trim().replaceAll(" +", " ");

        String[] words = phase.split(" ");
        String[] reverseWords = new String[words.length];

        for (int x = words.length - 1, z = 0; x >= 0; x--, z++) {
            reverseWords[z] = words[x];
        }

        String reversePhase = String.join(" ", reverseWords);

        return reversePhase;
    }
}
