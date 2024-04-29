// Return an array that consists of indices of peaks in the given array in any order

/**
 * @param {number[]} mountain
 * @return {number[]}
 */

var findPeaks = function (mountain) {
    if (mountain.length < 3) { return []; }

    let peaks = [];

    for (let i = 1; i < mountain.length - 1; i++) {
        if (mountain[i] > mountain[i + 1] && mountain[i] > mountain[i - 1]) { peaks.push(i); }
    }

    return peaks;
};
