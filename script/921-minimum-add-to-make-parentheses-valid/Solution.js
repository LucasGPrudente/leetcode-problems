// Return the minimum number of moves required to make s valid

/**
 * @param {string} s
 * @return {number}
 */

var minAddToMakeValid = function (s) {
    let ope = 0;
    let clo = 0;

    for (let c of s.split("")) {
        if (c == '(') {
            ope++;
        } else {
            if (ope > 0) {
                ope--;
            } else {
                clo++;
            }
        }
    }

    return ope + clo;
};
