var climbStairs = function (n) {
    if (n <= 2) {
        return n;
    }

    let ways = 0;
    let sequence = [1, 2];

    for (let i = 0; i < n - 2; i++) {
        ways = sequence[0] + sequence[1];
        sequence = [sequence[1], ways];
    }

    return ways;
};
