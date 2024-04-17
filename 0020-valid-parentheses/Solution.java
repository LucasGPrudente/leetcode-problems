class Solution {
    public boolean isValid(String s) {
        ArrayList<Character> sequence = new ArrayList<Character>();

        for (char paren : s.toCharArray()) {
            if (paren == '(' || paren == '[' || paren == '{') {
                sequence.add(paren);
                continue;
            }

            if ((sequence.size() > 0)
            && ((paren == ')') && (sequence.get(sequence.size() - 1) == '(')
            || (paren == ']') && (sequence.get(sequence.size() - 1) == '[')
            || (paren == '}') && (sequence.get(sequence.size() - 1) == '{'))) {
                sequence.remove(sequence.size() - 1);
                continue;
            }

            return false;
        }

        return sequence.size() == 0;
    }
}
