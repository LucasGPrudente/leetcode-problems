## [219. Contains Duplicate II](https://leetcode.com/problems/contains-duplicate-ii)

<code>Easy</code> <code>Array</code> <code>Hash Table</code> <code>Sliding Window</code>

<br>

Given an integer array <code>nums</code> and an integer <code>k</code>, return <code>true</code> *if there are two __distinct indices__* <code>i</code> *and* <code>j</code> *in the array such that* <code>nums[i] == nums[j]</code> *and* <code>abs(i - j) <= k</code>.

<br>

#### Example 1:

> __Input:__ nums = [1,2,3,1], k = 3
>   
> __Output:__ true  

#### Example 2:

> __Input:__ nums = [1,0,1,1], k = 1
> 
> __Output:__ true  

#### Example 3:

> __Input:__ nums = [1,2,3,1,2,3], k = 2
>  
> __Output:__ false  

<br>

#### Constraints:

- <code>1 <= nums.length <= 10<sup>5</sup></code>
- <code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code>
- <code>0 <= k <= 10<sup>5</sup></code>
