// Return the nth element of the count-and-say sequence

class Solution {
    public String countAndSay(int n) {
        String sequence = "1";

        for (int i = 1; i < n; i++) {
            sequence = count(sequence);
        }

        return sequence;
    }

    public String count(String currStr) {
        StringBuilder sequence = new StringBuilder("");
        char[] arr = currStr.toCharArray();

        for (int i = 0; i < arr.length; i++) {
            int num = arr[i] - '0';
            int times = 1;

            for (int j = i + 1; j < arr.length; j++) {
                if (arr[j] != arr[i]) {
                    break;
                }

                i = j;
                times++;
            }

            sequence.append(times).append(num);
        }

        return sequence.toString();
    }
}
