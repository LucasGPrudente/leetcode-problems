// Return how many days to a warmer temperature for each day

/**
 * @param {number[]} temps
 * @return {number[]}
 */

var dailyTemperatures = function (temps) {
    let l = temps.length;

    let ans = new Array(l).fill(0);
    let day = new Array(l);

    let sz = 0;

    for (let i = 0; i < l; i++) {
        while (sz > -1 && temps[i] > temps[day[sz]]) {
            ans[day[sz]] = i - day[sz--];
        }

        sz++;
        day[sz] = i;
    }

    return ans;
};
