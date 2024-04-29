var numJewelsInStones = function (jewels, stones) {
    let count = 0;

    for (let x of stones) {
        if (jewels.indexOf(x) > -1) count++;
    }

    return count;
};
