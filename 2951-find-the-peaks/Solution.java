// Return an array that consists of indices of peaks in the given array in any order

class Solution {
    public List<Integer> findPeaks(int[] mountain) {
        List<Integer> peaks = new ArrayList<>();

        if (mountain.length < 3) { return peaks; }

        for (int i = 1; i < mountain.length - 1; i++) {
            if (mountain[i] > mountain[i - 1] && mountain[i] > mountain[i + 1]) { peaks.add(i); }
        }

        return peaks;
    }
}
