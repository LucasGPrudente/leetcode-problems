// Return the sum of the chemistry of all the teams

class Solution {
    public long dividePlayers(int[] skill) {
        int n = skill.length;

        Arrays.sort(skill);

        long sum = 0;

        for (int i = 0, k = n - 1; i < k; i++, k--) {
            if (skill[i] + skill[k] != skill[0] + skill[n - 1]) { return -1; }

            sum += skill[i] * skill[k];
        }

        return sum;
    }
}