// Return the sum of the chemistry of all the teams

/**
 * @param {number[]} skill
 * @return {number}
 */

var dividePlayers = function (skill) {
    let n = skill.length;

    skill.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0, k = n - 1; i < k; i++, k--) {
        if (skill[i] + skill[k] != skill[0] + skill[n - 1]) { return -1; }

        sum += skill[i] * skill[k];
    }

    return sum;
};