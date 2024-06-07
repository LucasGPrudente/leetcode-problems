//Returns an integer pairs array 

//Pairs[i] is the number of potions that will form a successful pair with the ith spell

/**
 * @param {number[]} spells
 * @param {number[]} potions
 * @param {number} success
 * @return {number[]}
 */

var successfulPairs = function (spells, potions, success) {
    let n = spells.length;
    let m = potions.length;

    let pr = new Array(n);

    potions.sort((a, b) => { return a - b; });

    for (let i = 0; i < n; i++) {
        let lt = 0;
        let md = 0;
        let rt = potions.length - 1;

        while (lt <= rt) {
            md = parseInt((lt + rt) / 2);

            let res = spells[i] * potions[md];

            if (res >= success) { rt = md - 1; }
            else { lt = md + 1; }
        }

        pr[i] = m - lt;
    }

    return pr;
};
