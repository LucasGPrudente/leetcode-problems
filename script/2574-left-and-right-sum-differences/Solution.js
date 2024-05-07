// Return the array answer, where answer[i] = |leftSum[i] - rightSum[i]|

/**
 * @param {number[]} nums
 * @return {number[]}
 */

var leftRightDifference = function (nums) {
    let length = nums.length;
    let leftSum = new Array(length);
    let rightSum = new Array(length);
    let answer = new Array(length);

    leftSum[0] = 0;
    rightSum[length - 1] = 0;

    for (let i = 1; i < length; i++) {
        leftSum[i] = parseInt(leftSum[i - 1] + nums[i - 1]);
    }

    for (let i = length - 2; i >= 0; i--) {
        rightSum[i] = parseInt(rightSum[i + 1] + nums[i + 1]);
    }

    for (let i = 0; i < length; i++) {
        answer[i] = Math.abs(parseInt(leftSum[i] - rightSum[i]));
    }

    return answer;
};
