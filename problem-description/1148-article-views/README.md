## [1148. Article Views I](https://leetcode.com/problems/article-views-i)

<code>Easy</code>

<br>

Table: <code>Views</code>

> | Column Name   | Type    |  
> |---------------|---------|  
> | article_id    | int     |  
> | author_id     | int     |  
> | viewer_id     | int     |  
> | view_date     | date    |  
>   
> There is no primary key (column with unique values) for this table, the table may have duplicate rows.  
> Each row of this table indicates that some viewer viewed an article (written by some author) on some date.   
> Note that equal author_id and viewer_id indicate the same person.  
 
<br>

Write a solution to find all the authors that viewed at least one of their own articles.

Return the result table sorted by <code>id</code> in ascending order.

The result format is in the following example.

<br>

#### Example 1:

> __Input__   
> Views table:  
> | article_id | author_id | viewer_id | view_date  |  
> |------------|-----------|-----------|------------|  
> | 1          | 3         | 5         | 2019-08-01 |  
> | 1          | 3         | 6         | 2019-08-02 |  
> | 2          | 7         | 7         | 2019-08-01 |  
> | 2          | 7         | 6         | 2019-08-02 |  
> | 4          | 7         | 1         | 2019-07-22 |  
> | 3          | 4         | 4         | 2019-07-21 |  
> | 3          | 4         | 4         | 2019-07-21 |  
>
> <br>
>  
> __Output__   
> | id   |  
> |------|  
> | 4    |  
> | 7    |  
