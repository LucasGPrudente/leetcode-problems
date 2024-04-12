var fib = function (n) {
    let fibonacci = [0, 1];
    let nextNum = 0;

    if (n <= 1) return fibonacci[n];

    let i = 0
    while (i < n) {
        nextNum = fibonacci[0] + fibonacci[1];
        fibonacci[0] = fibonacci[1];
        fibonacci[1] = nextNum;
        i++;
    }

    return fibonacci[0];
};
