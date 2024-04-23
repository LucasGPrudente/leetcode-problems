// Return true if sentence is a pangram, or false otherwise
// PANGRAM is a sentence that contains all the letters of the alphabet

class Solution {
    public boolean checkIfPangram(String sentence) {
        Set<Character> set = new HashSet<>();

        for (char c : sentence.toCharArray()) {
            set.add(c);
        }

        return set.size() == 26;
    }
}
