// Return the time taken for the person at position k to finish buying tickets

/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */

var timeRequiredToBuy = function (tickets, k, time = 0) {
    for (let i = 0; i < tickets.length; i++) {
        if (tickets[k] == 0) { return time; }
        if (tickets[i] == 0) { continue; }

        time++;
        tickets[i]--;
    }

    return timeRequiredToBuy(tickets, k, time);
};
