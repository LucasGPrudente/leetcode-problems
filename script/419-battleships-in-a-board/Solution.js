// Return the number of the battleships on board

/**
 * @param {character[][]} board
 * @return {number}
 */

var countBattleships = function (board) {
    let ship = 0;

    let m = board.length;
    let n = board[0].length;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (board[i][j] == 'X') {
                mark(board, i, j);
                ship++;
            }
        }
    }

    return ship;

    function mark(board, i, j) {
        board[i][j] = '*';

        if (i < board.length - 1 && board[i + 1][j] == 'X') {
            mark(board, i + 1, j);
        } else if (j < board[0].length - 1 && board[i][j + 1] == 'X') {
            mark(board, i, j + 1);
        } else if (i > 0 && board[i - 1][j] == 'X') {
            mark(board, i - 1, j);
        } else if (j > 0 && board[i][j - 1] == 'X') {
            mark(board, i, j - 1);
        }
    }
};
