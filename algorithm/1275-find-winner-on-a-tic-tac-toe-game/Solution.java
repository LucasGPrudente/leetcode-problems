// Return the winner of the game if it exists (A or B)

class Solution {
    public String tictactoe(int[][] moves) {
        String[][] grid = new String[3][3];

        for (int i = 0; i < moves.length; i += 2) {
            grid[moves[i][0]][moves[i][1]] = "A";
        }

        for (int i = 1; i < moves.length; i += 2) {
            grid[moves[i][0]][moves[i][1]] = "B";
        }

        if (grid[0][0] != null && grid[0][0] == grid[0][1] && grid[0][0] == grid[0][2]) { return grid[0][0]; }
        if (grid[1][0] != null && grid[1][0] == grid[1][1] && grid[1][0] == grid[1][2]) { return grid[1][0]; }
        if (grid[2][0] != null && grid[2][0] == grid[2][1] && grid[2][0] == grid[2][2]) { return grid[2][0]; }

        if (grid[0][0] != null && grid[0][0] == grid[1][0] && grid[0][0] == grid[2][0]) { return grid[0][0]; }
        if (grid[0][1] != null && grid[0][1] == grid[1][1] && grid[0][1] == grid[2][1]) { return grid[0][1]; }
        if (grid[0][2] != null && grid[0][2] == grid[1][2] && grid[0][2] == grid[2][2]) { return grid[0][2]; }

        if (grid[0][0] != null && grid[0][0] == grid[1][1] && grid[0][0] == grid[2][2]) { return grid[0][0]; }
        if (grid[2][0] != null && grid[2][0] == grid[1][1] && grid[2][0] == grid[0][2]) { return grid[2][0]; }

        if (moves.length == 9) { return "Draw"; }

        return "Pending";
    }
}