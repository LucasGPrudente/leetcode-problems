// Return the value of position X in the sequence (Tribonacci Number)

/**
 * @param {number} n
 * @return {number}
 */

var tribonacci = function (n) {
    let tribonacci = [0, 1, 1];
    let nextNum = 0;

    if (n <= 2) { return tribonacci[n]; }

    let i = 3;
    while (i <= n) {
        nextNum = tribonacci[0] + tribonacci[1] + tribonacci[2];
        tribonacci[0] = tribonacci[1];
        tribonacci[1] = tribonacci[2];
        tribonacci[2] = nextNum;
        i++;
    }

    return nextNum;
};
