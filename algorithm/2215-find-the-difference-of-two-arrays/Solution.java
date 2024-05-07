// Return a list of all distinct integers in nums1 and nums2

class Solution {
    public List<List<Integer>> findDifference(int[] numsOne, int[] numsTwo) {
        List<List<Integer>> answer = new ArrayList<List<Integer>>();

        Set<Integer> setOne = new HashSet<Integer>();
        Set<Integer> setTwo = new HashSet<Integer>();

        List<Integer> twoUniques = new ArrayList<Integer>();
        List<Integer> oneUniques = new ArrayList<Integer>();

        for (int num : numsOne) {
            setOne.add(num);
        }

        for (int num : numsTwo) {
            if (setOne.add(num)) { twoUniques.add(num); }

            setTwo.add(num);
        }

        for (int num : numsOne) {
            if (setTwo.add(num)) { oneUniques.add(num); }
        }

        answer.add(oneUniques);
        answer.add(twoUniques);

        return answer;
    }
}
