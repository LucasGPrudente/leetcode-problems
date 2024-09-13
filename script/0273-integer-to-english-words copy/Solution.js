// Convert a non-negative integer num to its English words representation

/**
 * @param {number} num
 * @return {string}
 */

var numberToWords = function(n) {
    if (n == 0) { return "Zero"; }

    let table = new Map();

    fillTable();

    let chunks = [];

    divideInChunks(n)

    let words = [];

    chunksToWords();

    return words.join(" ");

    function fillTable() {
        table = new Map([
            [1, "One"],
            [2, "Two"],
            [3, "Three"],
            [4, "Four"],
            [5, "Five"],
            [6, "Six"],
            [7, "Seven"],
            [8, "Eight"],
            [9, "Nine"],

            [11, "Eleven"],
            [12, "Twelve"],
            [13, "Thirteen"],
            [14, "Fourteen"],
            [15, "Fifteen"],
            [16, "Sixteen"],
            [17, "Seventeen"],
            [18, "Eighteen"],
            [19, "Nineteen"],

            [10, "Ten"],
            [20, "Twenty"],
            [30, "Thirty"],
            [40, "Forty"],
            [50, "Fifty"],
            [60, "Sixty"],
            [70, "Seventy"],
            [80, "Eighty"],
            [90, "Ninety"],

            [100, "One Hundred"],
            [200, "Two Hundred"],
            [300, "Three Hundred"],
            [400, "Four Hundred"],
            [500, "Five Hundred"],
            [600, "Six Hundred"],
            [700, "Seven Hundred"],
            [800, "Eight Hundred"],
            [900, "Nine Hundred"],
        ]);
    }

    function divideInChunks(n) {
        while (n > 0) {
            let len = 0;
            let num = 0;
            let dec = 1;

            while (n > 0 && len < 3) {
                num += (n % 10) * dec;
                len += 1;
                dec *= 10;
                n = parseInt(n / 10);
            }

            chunks.unshift(num);
        }
    }

    function chunksToWords() {
        if (chunks.length == 4) {
            numberToWords(chunks[0]);
            words.push("Billion");

            chunks.shift();
        }

        if (chunks.length == 3) {
            if (chunks[0] > 0) {
                numberToWords(chunks[0]);
                words.push("Million");
            }

            chunks.shift();
        }

        if (chunks.length == 2) {
            if (chunks[0] > 0) {
                numberToWords(chunks[0]);
                words.push("Thousand");
            }

            chunks.shift();
        }

        if (chunks[0] > 0) {
            numberToWords(chunks[0]);
        }

        return words;
    }

    function numberToWords(num) {
        let ones = num - (num % 100);
        let tens = num % 100;
        let hund = num % 10;

        if (tens > 20) {
            tens -= hund;
        } else {
            hund = 0;
        }

        if (ones != 0) {
            words.push(table.get(ones));
        }

        if (tens != 0) {
            words.push(table.get(tens));
        }

        if (hund != 0) {
            words.push(table.get(hund));
        }
    }
};