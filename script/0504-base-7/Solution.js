// Return an integer num in  string of its base 7 representation

/**
 * @param {number} num
 * @return {string}
 */

var convertToBase7 = function (num) {
    if (num == 0) { return "0"; }

    let base7 = [];

    for (let n = (num < 0) ? num * -1 : num; n > 0; n = parseInt(n / 7)) {
        base7.push(parseInt(n % 7));
    }

    base7.reverse();

    if (num < 0) { return "-" + base7.join(""); }

    return base7.join("");
};

// return num.toString(7);
