var judgeCircle = function (moves) {
    let arr = moves.split("");
    let horiz = 0, vert = 0;

    arr.forEach((e) => {
        if (e == 'L') horiz++;
        else if (e == 'R') horiz--;
        else if (e == 'U') vert++;
        else vert--;
    });

    return (horiz == 0) && (vert == 0);
};
