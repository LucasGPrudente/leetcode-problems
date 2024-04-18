var reverseWords = function (s) {
    const phase = s.replace(/  +/g, ' ').trim();
    const arr = phase.split(" ");
    const revArr = arr.toReversed();
    const revPhase = revArr.join(" ");

    return revPhase;
};

// return (((s.replace( /  +/g, ' ' ).trim()).split(" ")).toReversed()).join(" ");
