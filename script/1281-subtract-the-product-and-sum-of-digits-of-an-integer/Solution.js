// Return the difference between the product of its digits and the sum of its digits

/**
 * @param {number} n
 * @return {number}
 */

var subtractProductAndSum = function (n) {
    let pro = 1;
    let sum = 0;

    while (n > 0) {
        let dig = parseInt(n % 10);
        pro = pro * dig;
        sum = sum + dig;
        n = parseInt(n / 10);
    }

    return pro - sum;
};
