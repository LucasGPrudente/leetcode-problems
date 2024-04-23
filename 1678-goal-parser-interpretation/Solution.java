// Return the Goal Parser's interpretation of command

class Solution {
    public String interpret(String command) {
        char[] arr = command.toCharArray();
        StringBuilder interpr = new StringBuilder();

        int i = 0;
        while (i < arr.length) {
            if (arr[i] == 'G') {
                interpr.append("G");
                i += 1;
            } else if (arr[i] == '(' && arr[i + 1] == ')') {
                interpr.append("o");
                i += 2;
            } else {
                interpr.append("al");
                i += 4;
            }
        }

        return interpr.toString();
    }
}
