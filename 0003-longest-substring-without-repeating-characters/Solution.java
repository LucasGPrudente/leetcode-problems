class Solution {
    public int lengthOfLongestSubstring(String s) {
        List<Integer> lengths = new ArrayList<>();

        for (int x = 0; x < s.length(); x++) {
            StringBuilder temp = new StringBuilder("");

            for (int z = x; z < s.length(); z++) {
                String letter = String.valueOf(s.charAt(z));

                if (temp.indexOf(letter) != -1) {
                    break;
                }

                temp.append(letter);
            }

            lengths.add(temp.length());
        }

        Collections.sort(lengths);

        return lengths.get(lengths.size() - 1);
    }
}
