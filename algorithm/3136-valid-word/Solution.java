// Return true if word is valid

class Solution {
    public boolean isValid(String word) {
        int vows = 0;
        int cons = 0;

        for (char c : word.toCharArray()) {
            if (c == '@' || c == '#' || c == '$') { return false; }

            if (c >= '0' && c <= '9') { continue; }

            if (c >= 'A' && c <= 'Z') { c = (char)(c + 32); }
            
            if (c == 'a' || c == 'e' || c == 'i' || c == 'o' || c == 'u') { vows++; } 
            else { cons++; }
        }

        return word.length() >= 3 && vows > 0 && cons > 0;
    }
}
