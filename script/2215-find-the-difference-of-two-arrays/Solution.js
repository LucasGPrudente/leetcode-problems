// Return a list of all distinct integers in nums1 and nums2

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */

var findDifference = function (numsOne, numsTwo) {
    let setOne = new Set(numsOne);
    let setTwo = new Set(numsTwo);

    let answer = [[], []];

    for (let num of setOne) {
        if (!setTwo.has(num)) { answer[0].push(num); }
    }

    for (let num of setTwo) {
        if (!setOne.has(num)) { answer[1].push(num); }
    }

    return answer;
};
