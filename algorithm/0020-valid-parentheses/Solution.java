// Check if the input string is valid

class Solution {
    public boolean isValid(String s) {
        ArrayList<Character> sequence = new ArrayList<Character>();

        Map<Character, Character> parentheses = new HashMap<Character, Character>();

        parentheses.put(')', '(');
        parentheses.put(']', '[');
        parentheses.put('}', '{');

        for (char c : s.toCharArray()) {
            if (c == '(' || c == '[' || c == '{') { sequence.add(c); } 
            else if (sequence.size() > 0 && sequence.get(sequence.size() - 1) == parentheses.get(c)) { sequence.remove(sequence.size() - 1); } 
            else { return false; }
        }

        return sequence.size() == 0;
    }
}
