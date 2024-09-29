// Return an array ans where ans[i] is the distance from index i to the closest occurrence of character c in s

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 */

var shortestToChar = function (s, c) {
    let len = s.length;

    let ans = new Array(len).fill(len);

    for (let i = 0; i < len; i++) {
        if (s[i] == c) {
            ans[i] = 0;

            for (let j = i - 1, d = 1; j > -1; j--, d++) {
                if (ans[j] <= d) { break; }

                ans[j] = d;
            }

            for (let j = i + 1, d = 1; j < len; j++, d++) {
                if (ans[j] <= d) { break; }

                ans[j] = d;
            }
        }
    }

    return ans;
};