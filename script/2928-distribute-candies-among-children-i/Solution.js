// Return the total number of ways to distribute n candies among 3 children

/**
 * @param {number} n
 * @param {number} limit
 * @return {number}
 */

var distributeCandies = function (n, limit) {
    let ways = 0;

    let k = 0;

    for (let i = 0; i <= limit; i++) {
        for (let j = 0; j <= limit; j++) {
            k = n - i - j;

            if (k >= 0 && k <= limit) {
                ways++;
            }
        }
    }

    return ways;
};
