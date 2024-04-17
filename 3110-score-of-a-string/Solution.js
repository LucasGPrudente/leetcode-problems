var scoreOfString = function (s) {
    let score = 0;

    for (let i = 0; i < s.length - 1; i++) {
        let temp = s.charCodeAt(i) - s.charCodeAt(i + 1);
        if (temp < 0) { temp *= -1; }
        score += temp;
    }

    return score;
};
