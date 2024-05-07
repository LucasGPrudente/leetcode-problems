// Return true if the usage of capitals in it is right

class Solution {
    public boolean detectCapitalUse(String word) {
        boolean firstLetterIsCap = Character.isUpperCase(word.charAt(0));
        int cap = 0;

        for (int i = 0; i < word.length(); i++) {
            if (Character.isLowerCase(word.charAt(i))) { continue; }

            cap++;
        }

        return cap == 0 || cap == word.length() || (cap == 1 && firstLetterIsCap);
    }
}
