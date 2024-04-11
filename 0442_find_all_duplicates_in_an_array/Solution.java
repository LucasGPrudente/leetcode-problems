class Solution {
    public List<Integer> findDuplicates(int[] nums) {
        List<Integer> duplicatesNums = new ArrayList<>();
        int[] temp = new int[nums.length + 1];

        for (int n : nums) {
            temp[n]++;
        }

        int i = 0;
        for (int n : temp) {
            if (n > 1) duplicatesNums.add(i);
            i++;
        }

        return duplicatesNums;
    }
}
