## [2293. Min Max Game](https://leetcode.com/problems/min-max-game)

<code>Easy</code> <code>Array</code> <code>Simulation</code>

<br>

You are given a __0-indexed__ integer array nums whose length is a power of 2.

Apply the following algorithm on nums:

1. Let <code>n</code> be the length of <code>nums</code>. If <code>n == 1</code>, __end__ the process. Otherwise, __create__ a new __0-indexed__ integer array <code>newNums</code> of length <code>n / 2</code>.
2. For every __even__ index <code>i</code> where <code>0 <= i < n / 2</code>, __assign__ the value of <code>newNums[i]</code> as <code>min(nums[2 * i], nums[2 * i + 1])</code>.
3. For every __odd__ index <code>i</code> where <code>0 <= i < n / 2</code>, __assign__ the value of <code>newNums[i]</code> as <code>max(nums[2 * i], nums[2 * i + 1])</code>.
4. __Replace__ the array <code>nums</code> with <code>newNums</code>.
5. __Repeat__ the entire process starting from step 1.

Return *the last number that remains in* <code>nums</code> *after applying the algorithm*.

<br>

#### Example 1:

> __Input:__ nums = [1,3,5,2,4,8,2,2]
> 
> __Output:__ 1
> 
> __Explanation:__ The following arrays are the results of applying the algorithm repeatedly.  
> First: nums = [1,5,4,2]  
> Second: nums = [1,4]  
> Third: nums = [1]  
> 1 is the last remaining number, so we return 1.  

#### Example 2:

> __Input:__ nums = [3]
> 
> __Output:__ 3
> 
> __Explanation:__ 3 is already the last remaining number, so we return 3.  

<br>

#### Constraints:

- <code>1 <= nums.length <= 1024</code>
- <code>1 <= nums[i] <= 10<sup>9</sup></code>
- <code>nums.length</code> is a power of <code>2</code>.
