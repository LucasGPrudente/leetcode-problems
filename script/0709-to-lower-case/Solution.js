// Return the string after replacing every uppercase letter with the same lowercase letter

/**
 * @param {string} s
 * @return {string}
 */

var toLowerCase = function (s) {
    let lower = "";

    s.split("").forEach((e) => {
        let code = e.charCodeAt(0);

        if (code >= 65 && code <= 90) { e = String.fromCharCode(code + 32); }

        lower += e;
    });

    return lower;
};
