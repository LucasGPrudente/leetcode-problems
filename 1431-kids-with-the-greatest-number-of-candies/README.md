## [1431. Kids With the Greatest Number of Candies](https://leetcode.com/problems/kids-with-the-greatest-number-of-candies/)

<code>Easy</code>

<br>

There are <code>n</code> kids with candies. You are given an integer array <code>candies</code>, where each <code>candies[i]</code> represents the number of candies the <code>i<sup>th</sup></code> kid has, and an integer <code>extraCandies</code>, denoting the number of extra candies that you have.

Return a boolean array <code>result</code> of length <code>n</code>, where <code>result[i]</code> is <code>true</code> if, after giving the <code>i<sup>th</sup></code> kid all the <code>extraCandies</code>, they will have the __greatest__ number of candies among all the kids, or <code>false</code> otherwise.

Note that __multiple__ kids can have the __greatest__ number of candies.

<br>

#### Example 1:

> __Input:__ candies = [2,3,5,1,3], extraCandies = 3  
> __Output:__ [true,true,true,false,true]   
> __Explanation:__ If you give all extraCandies to:  
> - Kid 1, they will have 2 + 3 = 5 candies, which is the greatest among the kids.  
> - Kid 2, they will have 3 + 3 = 6 candies, which is the greatest among the kids.  
> - Kid 3, they will have 5 + 3 = 8 candies, which is the greatest among the kids.  
> - Kid 4, they will have 1 + 3 = 4 candies, which is not the greatest among the kids.  
> - Kid 5, they will have 3 + 3 = 6 candies, which is the greatest among the kids.  

#### Example 2:

> __Input:__ candies = [4,2,1,1,2], extraCandies = 1  
> __Output:__ [true,false,false,false,false]   
> __Explanation:__ There is only 1 extra candy.  
> Kid 1 will always have the greatest number of candies, even if a different kid is given the extra candy.  

#### Example 3:

> __Input:__ candies = [12,1,12], extraCandies = 10  
> __Output:__ [true,false,true]  

<br>

#### Constraints:

- <code>n == candies.length</code>
- <code>2 <= n <= 100</code>
- <code>1 <= candies[i] <= 100</code>
- <code>1 <= extraCandies <= 50</code>
