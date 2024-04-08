class NumArray {
    int[] arrSum;

    public NumArray(int[] nums) {
        arrSum = nums;

        for(int i = 1; i < arrSum.length; i++){
            arrSum[i] = arrSum[i] + arrSum[i - 1];
        }
    }
    
    public int sumRange(int l, int r) {
        return (l == 0) ? arrSum[r] : arrSum[r] - arrSum[l - 1];
    }
}
