class Solution {
    public int[] intersection(int[] nums1, int[] nums2) {
        Set<Integer> setNums1 = new HashSet<>();

        for (int x : nums1) {
            setNums1.add(x);
        }

        Set<Integer> setNums2 = new HashSet<>();

        for (int x : nums2) {
            setNums2.add(x);
        }

        List<Integer> temp = new ArrayList<>();

        for (int x : setNums1) {
            if (setNums2.add(x) == false) {
                temp.add(x);
            }
        }

        int[] intersection = new int[temp.size()];

        for (int i = 0; i < intersection.length; i++) {
            intersection[i] = temp.get(i);
        }

        return intersection;
    }
}
