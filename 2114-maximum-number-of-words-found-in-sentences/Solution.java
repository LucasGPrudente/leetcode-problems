// Return the maximum number of words that appear in a single sentence

class Solution {
    public int mostWordsFound(String[] sentences) {
        int maxNumOfWords = 0;

        for (String sentence : sentences) {
            int numOfWords = countWords(sentence);

            if (numOfWords > maxNumOfWords) { maxNumOfWords = numOfWords; }
        }

        return maxNumOfWords;
    }

    public int countWords(String str) {
        int count = 0;

        for (char c : str.toCharArray()) {
            if (c == ' ') { count++; }
        }

        return count + 1;
    }
}
