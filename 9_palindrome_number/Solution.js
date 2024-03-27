var isPalindrome = function (x) {
    let num = x;
    let reversedNum = 0;

    while (num > 0) {
        reversedNum = parseInt((reversedNum * 10) + (num % 10));
        num = parseInt(num / 10);
    }

    return x == reversedNum;
};
