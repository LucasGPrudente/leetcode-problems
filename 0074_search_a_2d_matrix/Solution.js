var searchMatrix = function(matrix, target) {
    let columns = matrix.length;
    let rows = matrix[0].length;

    for(let i = 0; i < columns; i++){
        for(let j = 0; j < rows; j++){
            if(matrix[i][j] == target) return true;
        }
    }

    return false;
};
