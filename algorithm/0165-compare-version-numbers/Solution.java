/**
 * Return the following:
 * -> If version1 < version2, return -1
 * -> If version1 > version2, return 1
 * -> Otherwise, return 0
 */

class Solution {
    public int compareVersion(String version1, String version2) {
        String[] values1 = version1.split("\\.");
        String[] values2 = version2.split("\\.");

        int i = 0;

        while (i < values1.length && i < values2.length) {
            if (Integer.parseInt(values1[i]) < Integer.parseInt(values2[i])) { return -1; }
            if (Integer.parseInt(values1[i]) > Integer.parseInt(values2[i])) { return 1; }

            i++;
        }

        while (i < values1.length) {
            if (Integer.parseInt(values1[i]) > 0) { return 1; }

            i++;
        }

        while (i < values2.length) {
            if (Integer.parseInt(values2[i]) > 0) { return -1; }

            i++;
        }

        return 0;
    }
}