// Return if the array message is spam

class Solution {
    public boolean reportSpam(String[] message, String[] bannedWords) {
        Set<String> banned = new HashSet<>(Arrays.asList(bannedWords));

        int count = 0;

        for (String word : message) {
            if (banned.contains(word)) { count++; }
            if (count > 1) { return true; }
        }

        return false;
    }
}