// Return the maximum profit you can achieve from this transaction

/**
 * @param {number[]} prices
 * @return {number}
 */

var maxProfit = function (prices) {
    let pro = 0;
    let buy = prices[0];

    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < buy) {
            buy = prices[i];
        } else if (prices[i] - buy > pro) {
            pro = prices[i] - buy;
        }
    }

    return pro;
};