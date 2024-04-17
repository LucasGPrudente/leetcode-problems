class Solution {
    public String longestCommonPrefix(String[] strs) {
        int minLength = strs[0].length();

        for (String str : strs) {
            if (str.length() < minLength) {
                minLength = str.length();
            }
        }

        StringBuilder prefix = new StringBuilder("");

        outerloop: 
            for (int i = 0; i < minLength; i++) {
                char letter = strs[0].charAt(i);

                for (int j = 0; j < strs.length; j++) {
                    if (strs[j].charAt(i) != letter) {
                        break outerloop;
                    }
                }

                prefix.append(letter);
            }

        return prefix.toString();
    }
}
