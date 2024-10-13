## [11. Container With Most Water](https://leetcode.com/problems/container-with-most-water)

<code>Medium</code> <code>Array</code> <code>Two Pointers</code> <code>Greedy</code>

<br>

You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i]</code>).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return *the maximum amount of water a container can store*.

__Notice__ that you may not slant the container.

<br>

#### Example 1:


> __Input:__ height = [1,8,6,2,5,4,8,3,7]
>
> __Output:__ 49
>
> __Explanation:__ The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

#### Example 2:

> __Input:__ height = [1,1]
>
> __Output:__ 1

<br>

#### Constraints:

- <code>n == height.length</code>
- <code>2 <= n <= 10<sup>5</sup></code>
- <code>0 <= height[i] <= 10<sup>4</sup></code>
