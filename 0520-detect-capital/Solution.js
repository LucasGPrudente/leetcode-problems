var detectCapitalUse = function (word) {
    let firstLetterIsCap = word.charAt(0) == word.charAt(0).toUpperCase();
    let caps = 0;

    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == word.charAt(i).toLowerCase()) continue;
        caps++;
    }

    return caps == 0 || caps == word.length || (caps == 1 && firstLetterIsCap);
};
