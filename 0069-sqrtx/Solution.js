var mySqrt = function (x) {
    let sqrt = 0;

    while (sqrt * sqrt > x) {
        sqrt /= 2;
    }

    while (sqrt * sqrt <= x) {
        sqrt++;
    }

    return sqrt - 1;
};
