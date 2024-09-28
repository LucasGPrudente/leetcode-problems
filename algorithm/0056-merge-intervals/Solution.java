// Return an array of the non-overlapping intervals that cover all the intervals in the input

class Solution {
    public int[][] merge(int[][] intervals) {
        Arrays.sort(intervals, (a, b) -> a[0] - b[0]);

        int rw = intervals.length;

        List<int[]> merged = new ArrayList<>();

        for (int i = 0; i < rw;) {
            int stt = intervals[i][0];
            int end = intervals[i][1];

            for (i++; i < rw; i++) {
                if (end < intervals[i][0]) { break; }

                if (intervals[i][0] < stt) { stt = intervals[i][0]; }
                if (intervals[i][1] > end) { end = intervals[i][1]; }
            }

            merged.add(new int[] { stt, end });
        }

        int sz = merged.size();

        int[][] answer = new int[sz][];

        for (int i = 0; i < sz; i++) {
            answer[i] = merged.get(i);
        }

        return answer;
    }
}