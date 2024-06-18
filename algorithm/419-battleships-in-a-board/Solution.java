// Return the number of the battleships on board

class Solution {
    public int countBattleships(char[][] board) {
        int ship = 0;

        int m = board.length;
        int n = board[0].length;

        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (board[i][j] == 'X') {
                    mark(board, i, j);
                    ship++;
                }
            }
        }

        return ship;
    }

    public void mark(char[][] board, int i, int j) {
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
}
