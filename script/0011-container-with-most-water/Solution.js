// Return the maximum amount of water a container can store

/**
 * @param {number[]} height
 * @return {number}
 */

var maxArea = function (height) {
    let lt = 0;
    let rt = height.length - 1;

    let maxArea = (rt - lt) * Math.min(height[lt], height[rt]);

    while (lt < rt) {
        if (height[lt] > height[rt]) {
            rt--;
        } else {
            lt++;
        }

        maxArea = Math.max(maxArea, (rt - lt) * Math.min(height[lt], height[rt]));
    }

    return maxArea;
};