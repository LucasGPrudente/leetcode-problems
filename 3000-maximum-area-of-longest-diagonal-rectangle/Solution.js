var areaOfMaxDiagonal = function (dimensions) {
    let longDiag = 0;
    let maxArea = 0;

    dimensions.forEach((rect) => {
        let diag = Math.sqrt((rect[0] * rect[0]) + (rect[1] * rect[1]));
        let area = rect[0] * rect[1];

        if (diag > longDiag) {
            longDiag = diag;
            maxArea = area;
        } else if (diag == longDiag && area > maxArea) {
            maxArea = area;
        }
    });

    return maxArea;
};
