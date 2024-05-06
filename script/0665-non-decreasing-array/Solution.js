// Check if the array could become non-decreasing by modifying at most one element

/**
 * @param {number[]} nums
 * @return {boolean}
 */

var checkPossibility = function (nums) {
    let length = nums.length;

    if (length <= 2) { return true; }

    for (let i = 0; i < length - 1; i++) {
        if (nums[i] > nums[i + 1]) {
            let arrNone = nums.slice();
            let arrSome = nums.slice();

            arrNone.splice(i, 1);
            arrSome.splice(i + 1, 1);

            let noneIsAsc = true;
            let someIsAsc = true;

            for (let j = 0; j < length - 2; j++) {
                if (arrNone[j] > arrNone[j + 1]) { noneIsAsc = false; }
                if (arrSome[j] > arrSome[j + 1]) { someIsAsc = false; }
                if (!noneIsAsc && !someIsAsc) { break; }
            }

            return noneIsAsc || someIsAsc;
        }
    }

    return true;
};
