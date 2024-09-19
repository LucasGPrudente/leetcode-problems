// Return the amount of money that you have to pay in taxe

/**
 * @param {number[][]} brackets
 * @param {number} income
 * @return {number}
 */

var calculateTax = function (brackets, income) {
    if (income == 0) {
        return 0;
    }

    if (income < brackets[0][0]) {
        return income * (brackets[0][1] / 100);
    }

    let amount = brackets[0][0] * (brackets[0][1] / 100);

    income -= brackets[0][0];

    for (let i = 1; income > 0 && i < brackets.length; i++) {
        let value = brackets[i][0] - brackets[i - 1][0];

        amount += (income < value ? income : value) * (brackets[i][1] / 100);

        income -= value;
    }

    return amount;
};