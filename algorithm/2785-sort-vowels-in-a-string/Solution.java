// Sort the vowels in string, return the resulting string

class Solution {
    public String sortVowels(String str) {
        List<Character> vows = new ArrayList<Character>();

        int l = str.length();

        char[] newStr = str.toCharArray();

        for (int i = 0; i < l; i++) {
            char c = str.charAt(i);

            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u' || c == 'A' || c == 'E' || c == 'I' || c == 'O' || c == 'U') {
                newStr[i] = '*';
                vows.add(c);
            }
        }

        Collections.sort(vows);

        for (int i = 0, z = 0; i < l; i++) {
            if (newStr[i] == '*') {
                newStr[i] = vows.get(z++);
            }
        }

        return String.valueOf(newStr);
    }
}
