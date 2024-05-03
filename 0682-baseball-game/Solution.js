// Return the sum of all the scores on the record after applying all the operations

/**
 * @param {string[]} operations
 * @return {number}
 */

var calPoints = function (operations) {
    let sum = 0;

    let rec = [];

    for (let op of operations) {
        let length = rec.length;

        if (op == "+") { rec.push(rec[length - 1] + rec[length - 2]); }
        else if (op == "C") { rec.pop(); }
        else if (op == "D") { rec.push(rec[length - 1] * 2); }
        else { rec.push(parseInt(op)); }
    }

    for (let num of rec) {
        sum += num;
    }

    return sum;
};
