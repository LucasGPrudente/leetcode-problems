// You are given an API bool isBadVersion(version) which returns whether version is bad

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */

var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */

    return function (n) {
        let lt = 0;
        let md = 0;
        let rt = n;

        while (lt <= rt) {
            md = parseInt(lt + (rt - lt) / 2);

            if (isBadVersion(md)) {
                rt = md - 1;
            } else {
                lt = md + 1;
            }
        }

        return lt;
    };
};