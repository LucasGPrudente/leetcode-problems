// Return the k-th bit in Sn

/**
 * @param {number} n
 * @param {number} k
 * @return {character}
 */

var findKthBit = function (n, k) {
    let str = "0";

    while (n > 1) {
        let tmp = reverse(invert(str.split("")));
        str += "1" + tmp;
        n--;
    }

    return str[k - 1];

    function invert(chr) {
        for (let i = 0; i < chr.length; i++) {
            chr[i] = (chr[i] == '0') ? '1' : '0';
        }

        return chr;
    }

    function reverse(chr) {
        for (let i = 0, j = chr.length - 1; i < j; i++, j--) {
            let tmp = chr[i];
            chr[i] = chr[j];
            chr[j] = tmp;
        }

        return chr.join("");
    }
};