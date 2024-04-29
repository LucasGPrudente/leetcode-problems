// Reverse the segment of word that starts at 0 and ends at n (inclusive)

/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */

var reversePrefix = function (word, ch) {
    let arr = word.split("");

    let s = 0;
    let e = word.indexOf(ch);
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;

        s++;
        e--;
    }

    return arr.join("");
};
