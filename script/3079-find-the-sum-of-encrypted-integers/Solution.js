// Return the sum of encrypted elements

/**
 * @param {number[]} nums
 * @return {number}
 */

var sumOfEncryptedInt = function (nums) {
    let sum = 0;

    for (let n of nums) {
        let lgth = 0;
        let larg = 0;

        while (n > 0) {
            let dig = n % 10;

            if (dig > larg) {
                larg = dig;
            }

            n = parseInt(n / 10);
            lgth++;
        }

        // pl represents place value
        for (let i = 0, pl = 1; i < lgth; i++, pl *= 10) {
            sum += larg * pl;
        }
    }

    return sum;
};
