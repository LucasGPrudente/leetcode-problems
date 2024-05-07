## [2951. Find the Peaks](https://leetcode.com/problems/find-the-peaks)

<code>Easy</code> <code>Array</code> <code>Enumeration</code>

<br>

You are given a __0-indexed__ array <code>mountain</code>. Your task is to find all the __peaks__ in the <code>mountain</code> array.

Return *an array that consists of indices of __peaks__ in the given array in __any order__*.

#### Notes:

- A __peak__ is defined as an element that is __strictly greater__ than its neighboring elements.
- The first and last elements of the array are __not__ a peak.

<br>

#### Example 1:

> __Input:__ mountain = [2,4,4]
> 
> __Output:__ []
> 
> __Explanation:__ mountain[0] and mountain[2] can not be a peak because they are first and last elements of the array.
> mountain[1] also can not be a peak because it is not strictly greater than mountain[2].
> So the answer is [].

#### Example 2:

> __Input:__ mountain = [1,4,3,8,5]
> 
> __Output:__ [1,3]
> 
> __Explanation:__ mountain[0] and mountain[4] can not be a peak because they are first and last elements of the array.
> mountain[2] also can not be a peak because it is not strictly greater than mountain[3] and mountain[1].
> But mountain [1] and mountain[3] are strictly greater than their neighboring elements.
> So the answer is [1,3].

<br>

#### Constraints:

- <code>3 <= mountain.length <= 100</code>
- <code>1 <= mountain[i] <= 100</code>
