// Return the most frequent word that is not banned

class Solution {
    public String mostCommonWord(String paragraph, String[] banned) {
        List<String> banWords = new ArrayList<>();

        for (String b : banned) {
            banWords.add(b.toLowerCase());
        }

        Map<String, Integer> count = new HashMap<>();

        for (int i = 0; i < paragraph.length(); i++) {
            int k = i;

            while (i < paragraph.length()) {
                if (nonLetters(paragraph.charAt(i))) { break; }

                i++;
            }

            if (k - i == 0) { continue; }

            String word = paragraph.substring(k, i).toLowerCase();

            if (!banWords.contains(word)) { count.put(word, count.getOrDefault(word, 0) + 1); }
        }

        String answer = "";

        for (Map.Entry<String, Integer> entry : count.entrySet()) {
            if (answer.equals("") || entry.getValue() > count.get(answer)) { answer = entry.getKey(); }
        }

        return answer;
    }

    public boolean nonLetters(char c) {
        return c == ' ' || c == '!' || c == '?' || c == '\'' || c == ',' || c == ';' || c == '.';
    }
}