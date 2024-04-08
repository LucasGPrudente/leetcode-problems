## [303. Range Sum Query - Immutable](https://leetcode.com/problems/range-sum-query-immutable/)

<code>Easy</code>

<br>

Given an integer array <code>nums</code>, handle multiple queries of the following type:

1. Calculate the __sum__ of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> __inclusive__ where <code>left <= right</code>.

Implement the NumArray class:

- <code>NumArray(int[] nums)</code> Initializes the object with the integer array <code>nums</code>.
- <code>int sumRange(int left, int right)</code> Returns the __sum__ of the elements of <code>nums</code> between indices <code>left</code> and <code>right</code> __inclusive__ (i.e. <code>nums[left] + nums[left + 1] + ... + nums[right]</code>).

<br>

#### Example 1:

> __Input__  
> ["NumArray", "sumRange", "sumRange", "sumRange"]  
> [[[-2, 0, 3, -5, 2, -1]], [0, 2], [2, 5], [0, 5]]  
> __Output__  
> [null, 1, -1, -3]  
> __Explanation__  
> NumArray numArray = new NumArray([-2, 0, 3, -5, 2, -1]);  
> numArray.sumRange(0, 2); // return (-2) + 0 + 3 = 1  
> numArray.sumRange(2, 5); // return 3 + (-5) + 2 + (-1) = -1  
> numArray.sumRange(0, 5); // return (-2) + 0 + 3 + (-5) + 2 + (-1) = -3  

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>4</sup></code>
- <code>-10<sup>5</sup> <= nums[i] <= 10<sup>5</sup></code>
- <code>0 <= left <= right < nums.length</code>
- At most <code>10<sup>4</sup></code> calls will be made to <code>sumRange</code>.
