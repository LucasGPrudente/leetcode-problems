// Return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i]

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function (nums) {
    let l = nums.length;

    let p = 1;
    let z = 0;

    for (let n of nums) {
        if (n == 0) { z++; }
        else { p *= n; }
    }

    if (z > 1) { return new Array(l).fill(0); }

    if (z == 1) { return oneZero(); }

    return noZeros();

    function oneZero() {
        let answer = [];

        for (let n of nums) {
            if (n == 0) { answer.push(p); }
            else { answer.push(0); }
        }

        return answer;
    };

    function noZeros() {
        let answer = [];

        for (let n of nums) {
            answer.push(p / n);
        }

        return answer;
    };
};
