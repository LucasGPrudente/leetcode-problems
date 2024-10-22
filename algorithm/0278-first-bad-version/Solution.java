// You are given an API bool isBadVersion(version) which returns whether version is bad

public class Solution extends VersionControl {
    public int firstBadVersion(int n) {
        int lt = 0;
        int md = 0;
        int rt = n;

        while (lt <= rt) {
            md = lt + (rt - lt) / 2;

            if (isBadVersion(md)) {
                rt = md - 1;
            } else {
                lt = md + 1;
            }
        }

        return lt;
    }
}