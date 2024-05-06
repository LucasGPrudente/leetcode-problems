// Return the longest substring without repeating characters

/**
 * @param {string} s
 * @return {number}
 */

var lengthOfLongestSubstring = function(s) {
    if (s == "") { return 0; }

    let lengths = [];

    for (let x = 0; x < s.length; x++) {
        let temp = "";

        for (let z = x; z < s.length; z++) {
            let letter = s.charAt(z);

            if (temp.indexOf(letter) != -1) { break; }

            temp += letter;
        }

        lengths.push(temp.length);
    }

    lengths.sort((a, b) => { return a - b; });

    return lengths[lengths.length - 1];
};
