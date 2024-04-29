// Return the sum of the frequencies of the elements with the highest frequency in nums

/**
 * @param {number[]} nums
 * @return {number}
 */

var maxFrequencyElements = function (nums) {
    let frequencies = new Array(101);
    frequencies.fill(0);

    let maxFrequency = 0;
    let occurrences = 0;

    for (let n of nums) {
        frequencies[n]++;

        if (frequencies[n] > maxFrequency) { maxFrequency = frequencies[n]; }
    }

    for (let frequency of frequencies) {
        if (frequency == maxFrequency) { occurrences++; }
    }

    return maxFrequency * occurrences;
};
