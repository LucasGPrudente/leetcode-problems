// Reverse the string whenever the character 'i' appears

/**
 * @param {string} s
 * @return {string}
 */

var finalString = function (s) {
    let ans = [];

    for (let c of s) {
        if (c == "i") { ans.reverse(); }
        else { ans.push(c); }
    }

    return ans.join("");
};
