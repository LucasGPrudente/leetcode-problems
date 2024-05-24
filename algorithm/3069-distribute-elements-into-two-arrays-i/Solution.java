// After distribute all the elements of nums between two arrays arr1 and arr2, return the array result

class Solution {
    public int[] resultArray(int[] nums) {
        int[] ans = new int[nums.length];

        List<Integer> arr1 = new ArrayList<Integer>();
        List<Integer> arr2 = new ArrayList<Integer>();

        distributeElements(arr1, arr2, nums);

        return generateResult(arr1, arr2);
    }

    public void distributeElements(List<Integer> arr1, List<Integer> arr2, int[] nums){
        arr1.add(nums[0]);
        arr2.add(nums[1]);

        for (int i = 2; i < nums.length; i++) {
            if (arr1.get(arr1.size() - 1) > arr2.get(arr2.size() - 1)) {
                arr1.add(nums[i]);
            } else {
                arr2.add(nums[i]);
            }
        }
    }

    public int[] generateResult(List<Integer> arr1, List<Integer> arr2){
        int [] res = new int[arr1.size() + arr2.size()];

        int i = 0;
        int j = 0;

        while (i < arr1.size()){
            res[i] = arr1.get(i++);
        }

        while (j < arr2.size()) {
            res[i++] = arr2.get(j++);
        }

        return res;
    }
}
