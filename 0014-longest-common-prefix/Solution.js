var longestCommonPrefix = function (strs) {
    let prefix = "";
    let arrLen = strs.length;
    let minLen = strs[0].length;

    for (let str of strs) {
        let len = str.length;

        if (len < minLen) minLen = len;
    }

    outerloop:
    for (let i = 0; i < minLen; i++) {
        let char = strs[0].charAt(i);

        for (let j = 0; j < arrLen; j++) {
            let currChar = strs[j].charAt(i);

            if (currChar != char) break outerloop;
        }

        prefix += char;
    }

    return prefix;
};
