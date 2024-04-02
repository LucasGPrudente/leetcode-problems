var romanToInt = function (s) {
    let values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 }
    let roman = s.split("");
    let num = 0;

    for (let i = 0; i < roman.length; i++) {
        if (roman[i] == "I" && roman[i + 1] == "V") { num += 4; i++; }
        else if (roman[i] == "I" && roman[i + 1] == "X") { num += 9; i++; }
        else if (roman[i] == "X" && roman[i + 1] == "L") { num += 40; i++; }
        else if (roman[i] == "X" && roman[i + 1] == "C") { num += 90; i++; }
        else if (roman[i] == "C" && roman[i + 1] == "D") { num += 400; i++; }
        else if (roman[i] == "C" && roman[i + 1] == "M") { num += 900; i++; }
        else { num += values[roman[i]]; }
    }

    return num;
};
