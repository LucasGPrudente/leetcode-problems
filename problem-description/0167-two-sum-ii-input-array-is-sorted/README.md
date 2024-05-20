## [167. Two Sum II - Input Array Is Sorted](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted)

<code>Medium</code> <code>Array</code> <code>Two Pointers</code> <code>Binary Search</code>

<br>

Given a __1-indexed__ array of integers <code>numbers</code> that is already *__sorted in non-decreasing order__*, find two numbers such that they add up to a specific <code>target</code> number. Let these two numbers be <code>numbers[index1]</code> and <code>numbers[index2]</code> where <code>1 <= index1 < index2 <= numbers.length</code>.

Return *the indices of the two numbers,* <code>index1</code> *and* <code>index2</code>*, __added by one__ as an integer array* <code>[index1, index2]</code> *of length 2*.

The tests are generated such that there is __exactly one solution__. You __may not__ use the same element twice.

Your solution must use only constant extra space.

<br>

#### Example 1:

> __Input:__ numbers = [2,7,11,15], target = 9  
>   
> __Output:__ [1,2]
> 
> __Explanation:__ The sum of 2 and 7 is 9. Therefore, index1 = 1, index2 = 2. We return [1, 2].  

#### Example 2:

> __Input:__ numbers = [2,3,4], target = 6
> 
> __Output:__ [1,3]
> 
> __Explanation:__ The sum of 2 and 4 is 6. Therefore index1 = 1, index2 = 3. We return [1, 3].  

#### Example 3:

> __Input:__ numbers = [-1,0], target = -1
> 
> __Output:__ [1,2]
> 
> __Explanation:__ The sum of -1 and 0 is -1. Therefore index1 = 1, index2 = 2. We return [1, 2].  
 
<br>

#### Constraints:

- <code>2 <= numbers.length <= 3 * 10<sup>4</sup></code>
- <code>-1000 <= numbers[i] <= 1000</code>
- <code>numbers</code> is sorted in __non-decreasing order__.
- <code>-1000 <= target <= 1000</code>
- The tests are generated such that there is __exactly one solution__.
