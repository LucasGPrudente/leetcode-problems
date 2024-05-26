## [2149. Rearrange Array Elements by Sign](https://leetcode.com/problems/rearrange-array-elements-by-sign)

<code>Medium</code> <code>Array</code> <code>Two Pointers</code> <code>Simulation</code>

<br>

You are given a __0-indexed__ integer array <code>nums</code> of __even__ length consisting of an __equal__ number of positive and negative integers.

You should return the array of nums such that the the array follows the given conditions:

1. Every __consecutive pair__ of integers have __opposite signs__.
2. For all integers with the same sign, the __order__ in which they were present in <code>nums</code> is __preserved__.
3. The rearranged array begins with a positive integer.

Return *the modified array after rearranging the elements to satisfy the aforementioned conditions*.

<br>

#### Example 1:

> __Input:__ nums = [3,1,-2,-5,2,-4]
> 
> __Output:__ [3,-2,1,-5,2,-4]
> 
> __Explanation:__  
> The positive integers in nums are [3,1,2]. The negative integers are [-2,-5,-4].  
> The only possible way to rearrange them such that they satisfy all conditions is [3,-2,1,-5,2,-4].  
> Other ways such as [1,-2,2,-5,3,-4], [3,1,2,-2,-5,-4], [-2,3,-5,1,-4,2] are incorrect because they do not satisfy one or more conditions.  

#### Example 2:

> __Input:__ nums = [-1,1]
> 
> __Output:__ [1,-1]
> 
> __Explanation:__  
> 1 is the only positive integer and -1 the only negative integer in nums.  
> So nums is rearranged to [1,-1].  
 
<br>

#### Constraints:

- <code>2 <= nums.length <= 2 * 10<sup>5</sup></code>
- <code>nums.length</code> is __even__
- <code>1 <= |nums[i]| <= 10<sup>5</sup></code>
- <code>nums</code> consists of __equal__ number of positive and negative integers.
