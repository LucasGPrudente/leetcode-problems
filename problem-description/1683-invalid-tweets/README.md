## [1683. Invalid Tweets](https://leetcode.com/problems/invalid-tweets)

<code>Easy</code>

<br>

Table: <code>Tweets</code>  
> | Column Name    | Type    |  
> |----------------|---------|  
> | tweet_id       | int     |  
> | content        | varchar |  
>   
> tweet_id is the primary key (column with unique values) for this table.  
> This table contains all the tweets in a social media app.  
 
<br>

Write a solution to find the IDs of the invalid tweets. The tweet is invalid if the number of characters used in the content of the tweet is __strictly greater__ than <code>15</code>.

Return the result table in __any order__.

The result format is in the following example.

<br>

#### Example 1:

> __Input:__   
> Tweets table:  
> | tweet_id | content                          |  
> |----------|----------------------------------|  
> | 1        | Vote for Biden                   |  
> | 2        | Let us make America great again! |  
>   
> __Output:__   
> | tweet_id |  
> |----------|  
> | 2        |  
>   
> __Explanation:__   
> Tweet 1 has length = 14. It is a valid tweet.  
> Tweet 2 has length = 32. It is an invalid tweet.  
