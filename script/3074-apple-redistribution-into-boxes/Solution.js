// Return the minimum number of boxes you need to select to redistribute these n packs of apples into boxes

/**
 * @param {number[]} apple
 * @param {number[]} capacity
 * @return {number}
 */

var minimumBoxes = function (apple, capacity) {
    capacity.sort((a, b) => { return a - b });

    let minBoxes = 0;
    let numApple = 0;

    for (let x of apple) {
        numApple += x;
    }

    for (let i = capacity.length - 1; i >= 0 && numApple > 0; i--) {
        numApple -= capacity[i];
        minBoxes += 1;
    }

    return minBoxes;
};
