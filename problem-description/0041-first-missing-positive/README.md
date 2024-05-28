## [41. First Missing Positive](https://leetcode.com/problems/first-missing-positive)

<code>Hard</code> <code>Array</code> <code>Hash Table</code>

<br>

Given an unsorted integer array <code>nums</code>. Return the *smallest positive integer* that is *not present* in <code>nums</code>.

You must implement an algorithm that runs in <code>O(n)</code> time and uses <code>O(1)</code> auxiliary space.

<br>

#### Example 1:

> __Input:__ nums = [1,2,0]
> 
> __Output:__ 3
> 
> __Explanation:__ The numbers in the range [1,2] are all in the array.  

#### Example 2:

> __Input:__ nums = [3,4,-1,1]
> 
> __Output:__ 2
> 
> __Explanation:__ 1 is in the array but 2 is missing.  

#### Example 3:

> __Input:__ nums = [7,8,9,11,12]
> 
> __Output:__ 1
> 
> __Explanation:__ The smallest positive integer 1 is missing.  
 
<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-2<sup>31</sup> <= nums[i] <= 2<sup>31</sup> - 1</code>
