// Return the maximum difference between two successive elements in its sorted form

/**
 * @param {number[]} nums
 * @return {number}
 */

var maximumGap = function (nums) {
  let len = nums.length;

  if (len == 1) {
      return 0;
  }

  if (len == 2) {
      return Math.abs(nums[0] - nums[1]);
  }

  let max = Math.max(...nums);

  for (let exp = 1; parseInt(max / exp) > 0; exp *= 10) {
      countSort(nums, exp);
  }

  let maxDif = 0;

  for (let i = 1; i < nums.length; i++) {
      maxDif = Math.max(maxDif, nums[i] - nums[i - 1]);
  }

  return maxDif;

  function countSort(nums, exp) {
      let count = new Array(10).fill(0);

      for (let i = 0; i < nums.length; i++) {
          let j = parseInt(nums[i] / exp) % 10;

          count[j]++;
      }

      for (let i = 1; i < 10; i++) {
          count[i] += count[i - 1];
      }

      let output = new Array(len);

      for (let i = len - 1; i >= 0; i--) {
          let j = parseInt(nums[i] / exp) % 10;

          output[count[j] - 1] = nums[i];
          count[j]--;
      }

      for (let i = 0; i < len; i++) {
          nums[i] = output[i];
      }
  }
};