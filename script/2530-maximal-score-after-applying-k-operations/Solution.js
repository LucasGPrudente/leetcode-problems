// Return the maximum possible score you can attain after applying exactly k operations

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

var maxKelements = function (nums, k) {
    let heap = new MaxPriorityQueue({ compare: (a, b) => b - a });

    for (let num of nums) {
        heap.enqueue(num)
    }

    let score = 0;

    while (k > 0) {
        let max = heap.dequeue();

        score += max;
        heap.enqueue(Math.ceil(max / 3));
        k--;
    }

    return score;
};