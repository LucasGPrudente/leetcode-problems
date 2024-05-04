var reverse = function (x) {
    let num = x;
    let reversedNum = 0;

    if (x < 0) {
        num = num * -1;
    }

    while (num > 0) {
        reversedNum = parseInt((reversedNum * 10) + (num % 10));
        num = parseInt(num / 10);
    }

    if (reversedNum >= Math.pow(-2, 31) && reversedNum <= Math.pow(2, 31) - 1) {
        if (x < 0) {
            return reversedNum * -1;
        }
        return reversedNum;
    }

    return 0;
};
