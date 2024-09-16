// Return the minimum minutes difference between any two time-points in the list

/**
 * @param {string[]} timePoints
 * @return {number}
 */

var findMinDifference = function (timePoints) {
    let timeInMinutes = [];

    for (let time of timePoints) {
        let minutes = parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3, 5));

        if (timeInMinutes.includes(minutes)) {
            return 0;
        } else {
            timeInMinutes.push(minutes);
        }
    }

    timeInMinutes.sort((a, b) => a - b);

    timeInMinutes.push(timeInMinutes[0] + (24 * 60));

    let min = Number.MAX_VALUE;

    for (let i = 1; i < timeInMinutes.length; i++) {
        min = Math.min(min, timeInMinutes[i] - timeInMinutes[i - 1]);
    }

    return min;
};