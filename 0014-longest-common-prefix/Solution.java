var longestCommonPrefix = function (strs) {
    let prefix = "";
    let arrLen = strs.length;
    let minLen = strs[0].length;

    for (let str of strs) {
        if (str.length < minLen) {
            minLen = str.length;
        }
    }

    outerloop:
        for (let i = 0; i < minLen; i++) {
            let char = strs[0].charAt(i);

            for (let j = 0; j < arrLen; j++) {
                if (strs[j].charAt(i) != char) {
                    break outerloop;
                }
            }

            prefix += char;
        }

    return prefix;
};
