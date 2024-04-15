## [1470. Shuffle the Array](https://leetcode.com/problems/shuffle-the-array/)

<code>Easy</code>

<br>

Given the array <code>nums</code> consisting of <code>2n</code> elements in the form <code>[x1,x2,...,xn,y1,y2,...,yn]</code>.

Return the array in the form <code>[x1,y1,x2,y2,...,xn,yn]</code>.

<br>

#### Example 1:

> __Input:__ nums = [2,5,1,3,4,7], n = 3  
> __Output:__ [2,3,5,4,1,7]   
> __Explanation:__ Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].  

#### Example 2:

> __Input:__ nums = [1,2,3,4,4,3,2,1], n = 4  
> __Output:__ [1,4,2,3,3,2,4,1]  

#### Example 3:

> __Input:__ nums = [1,1,2,2], n = 2  
> __Output:__ [1,2,1,2]   

<br>

#### Constraints:

- <code>1 <= n <= 500</code>
- <code>nums.length == 2n</code>
- <code>1 <= nums[i] <= 10^3</code>
