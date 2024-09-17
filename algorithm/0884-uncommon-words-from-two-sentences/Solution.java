// Returns a list of all uncommon words, i.e. words that appear only once

class Solution {
    public String[] uncommonFromSentences(String s1, String s2) {
        Map<String, Integer> words = new HashMap<>();

        for (String str : s1.split(" ")) {
            words.put(str, words.getOrDefault(str, 0) + 1);
        }

        for (String str : s2.split(" ")) {
            words.put(str, words.getOrDefault(str, 0) + 1);
        }

        ArrayList<String> uncommon = new ArrayList<>();

        for (Map.Entry<String, Integer> entry : words.entrySet()) {
            if (entry.getValue() == 1) {
                uncommon.add(entry.getKey());
            }
        }

        return uncommon.toArray(new String[0]);
    }
}