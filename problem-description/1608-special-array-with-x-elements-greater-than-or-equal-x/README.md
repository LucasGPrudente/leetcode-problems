## [1608. Special Array With X Elements Greater Than or Equal X](https://leetcode.com/problems/special-array-with-x-elements-greater-than-or-equal-x)

<code>Easy</code> <code>Array</code> <code>Binary Search</code> <code>Sorting</code>

<br>

You are given an array <code>nums</code> of non-negative integers. <code>nums</code> is considered __special__ if there exists a number <code>x</code> such that there are __exactly__ <code>x</code> numbers in <code>nums</code> that are __greater than or equal to__ <code>x</code>.

Notice that <code>x</code> __does not__ have to be an element in <code>nums</code>.

Return <code>x</code> *if the array is __special__, otherwise, return* <code>-1</code>. *It can be proven that if* <code>nums</code> *is special, the value for* <code>x</code> *is __unique__*.

<br>

#### Example 1:

> __Input:__ nums = [3,5]
> 
> __Output:__ 2
> 
> __Explanation:__ There are 2 values (3 and 5) that are greater than or equal to 2.  

#### Example 2:

> __Input:__ nums = [0,0]
>  
> __Output:__ -1
> 
> __Explanation:__ No numbers fit the criteria for x.  
> If x = 0, there should be 0 numbers >= x, but there are 2.  
> If x = 1, there should be 1 number >= x, but there are 0.  
> If x = 2, there should be 2 numbers >= x, but there are 0.  
> x cannot be greater since there are only 2 numbers in nums.  

#### Example 3:

> __Input:__ nums = [0,4,3,0,4]
> 
> __Output:__ 3
> 
> __Explanation:__ There are 3 values that are greater than or equal to 3.  
 
<br>

#### Constraints:

- <code>1 <= nums.length <= 100</code>
- <code>0 <= nums[i] <= 1000</code>
