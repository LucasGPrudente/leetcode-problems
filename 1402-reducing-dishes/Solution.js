var maxSatisfaction = function (satisfaction) {
    let arr = Array.from(satisfaction);
    let length = arr.length;
    let max = 0;

    arr.sort((a, b) => { return a - b });

    // Only negatives satisfactions level
    if (arr[0] < 0 && arr[length - 1] < 0) { return 0; }

    // Only positive satisfactions level
    if (arr[0] >= 0 && arr[length - 1] >= 0) { return calcSatisfaction(arr); }

    // Both satisfactions level
    for (let i = 0; i < length; i++) {
        let calc = calcSatisfaction(arr.slice(i, length));

        if (calc > max) { max = calc; }
        if (calc < max && max != 0) { break; }
    }

    return max;
};

function calcSatisfaction(arr) {
    let calc = 0;
    let time = 1;

    for (let x of arr) {
        calc += x * time;
        time++;
    }

    return calc;
}
