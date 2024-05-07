## [2974. Minimum Number Game](https://leetcode.com/problems/minimum-number-game)

<code>Easy</code> <code>Array</code> <code>Sorting</code> <code>Heap (Priority Queue)</code> <code>Simulation</code>

<br>

You are given a __0-indexed__ integer array <code>nums</code> of __even__ length and there is also an empty array <code>arr</code>. Alice and Bob decided to play a game where in every round Alice and Bob will do one move. The rules of the game are as follows:

- Every round, first Alice will remove the __minimum__ element from <code>nums</code>, and then Bob does the same.
- Now, first Bob will append the removed element in the array <code>arr</code>, and then Alice does the same.
- The game continues until <code>nums</code> becomes empty.

Return *the resulting array* <code>arr</code>.

<br>

#### Example 1:

> __Input:__ nums = [5,4,2,3]
> 
> __Output:__ [3,2,5,4]
> 
> __Explanation:__ In round one, first Alice removes 2 and then Bob removes 3. Then in arr firstly Bob appends 3 and then Alice appends 2. So arr = [3,2].  
> At the begining of round two, nums = [5,4]. Now, first Alice removes 4 and then Bob removes 5. Then both append in arr which becomes [3,2,5,4].  

#### Example 2:

> __Input:__ nums = [2,5]
> 
> __Output:__ [5,2]
> 
> __Explanation:__ In round one, first Alice removes 2 and then Bob removes 5. Then in arr firstly Bob appends and then Alice appends. So arr = [5,2].  

<br>

#### Constraints:

- <code>2 <= nums.length <= 100</code>
- <code>1 <= nums[i] <= 100</code>
- <code>nums.length % 2 == 0</code>
