//Returns an integer pairs array 

//Pairs[i] is the number of potions that will form a successful pair with the ith spell

class Solution {
    public int[] successfulPairs(int[] spells, int[] potions, long success) {
        int n = spells.length;
        int m = potions.length;

        int[] pr = new int[n];

        Arrays.sort(potions);

        for (int i = 0; i < n; i++) {
            int lt = 0;
            int md = 0;
            int rt = potions.length - 1;

            while (lt <= rt) {
                md = lt + (rt - lt) / 2;

                if ((long) spells[i] * potions[md] >= success) {
                    rt = md - 1;
                } else {
                    lt = md + 1;
                }
            }

            pr[i] = m - lt;
        }

        return pr;
    }
}
