// Return an array of the non-overlapping intervals that cover all the intervals in the input

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);

    let rw = intervals.length;

    let merged = [];

    for (let i = 0; i < rw;) {
        let stt = intervals[i][0];
        let end = intervals[i][1];

        for (i++; i < rw; i++) {
            if (end < intervals[i][0]) { break; }

            if (intervals[i][0] < stt) { stt = intervals[i][0]; }
            if (intervals[i][1] > end) { end = intervals[i][1]; }
        }

        merged.push([stt, end]);
    }

    return merged;
};