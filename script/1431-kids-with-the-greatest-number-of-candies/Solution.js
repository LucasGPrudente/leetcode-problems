// Return a boolean array result

/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */

var kidsWithCandies = function (candies, extraCandies) {
    let results = [];
    let grtNum = 0;

    for (let x of candies) {
        if (x > grtNum) { grtNum = x; }
    }

    for (let x of candies) {
        if (x + extraCandies >= grtNum) { results.push(true); }
        else { results.push(false); }
    }

    return results;
};
