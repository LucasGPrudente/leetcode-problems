// Sort the array in ascending order and return it

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var sortArray = function (nums) {
    let max = Math.max(...nums);
    let min = Math.min(...nums);

    let range = max - min + 1;

    let cnt = new Array(range).fill(0);

    for (let n of nums) {
        cnt[n - min]++;
    }

    let sorted = [];

    for (let i = 0; i < range; i++) {
        let num = i + min;
        let frq = cnt[i];

        while (frq > 0) {
            sorted.push(num);
            frq--;
        }
    }

    return sorted;
};
