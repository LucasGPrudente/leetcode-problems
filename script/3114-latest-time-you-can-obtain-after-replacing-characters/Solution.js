// Replace all "?" characters in s with digits such that the time is a string with a 12-hour time and is as recent as possible

/**
 * @param {string} s
 * @return {string}
 */

var findLatestTime = function (s) {
    let ans = s.split("");

    if (ans[0] == '?') { ans[0] = (ans[1] <= 1 || ans[1] == '?') ? 1 : 0; }

    if (ans[1] == '?') { ans[1] = (ans[0] == 1) ? 1 : 9; }

    if (ans[3] == '?') { ans[3] = 5; }

    if (ans[4] == '?') { ans[4] = 9; }

    return ans.join("");
};
