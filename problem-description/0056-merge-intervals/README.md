## [56. Merge Intervals](https://leetcode.com/problems/merge-intervals)

<code>Medium</code> <code>Array</code> <code>Sorting</code>

<br>

Given an array of <code>intervals</code> where <code>intervals[i] = [starti, endi]</code>, merge all overlapping intervals, and return *an array of the non-overlapping intervals that cover all the intervals in the input*.

<br>

#### Example 1:

> __Input:__ intervals = [[1,3],[2,6],[8,10],[15,18]]
>
> __Output:__ [[1,6],[8,10],[15,18]]
>
> __Explanation:__ Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

#### Example 2:

> __Input:__ intervals = [[1,4],[4,5]]
>
> __Output:__ [[1,5]]
>
> __Explanation:__ Intervals [1,4] and [4,5] are considered overlapping.

<br>

#### Constraints:

- <code>1 <= intervals.length <= 10<sup>4</sup></code>
- <code>intervals[i].length == 2</code>
- <code>0 <= starti <= endi <= 10<sup>4</sup></code>