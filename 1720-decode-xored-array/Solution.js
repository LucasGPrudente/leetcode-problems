// Decode the XORed array

/**
 * @param {number[]} encoded
 * @param {number} first
 * @return {number[]}
 */

var decode = function (encoded, first) {
    let decoded = [];

    decoded.push(first);

    for (let i = 0; i < encoded.length; i++) {
        decoded.push(decoded[i] ^ encoded[i]);
    }

    return decoded;
};
