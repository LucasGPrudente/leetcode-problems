## [584. Find Customer Referee](https://leetcode.com/problems/find-customer-referee)

<code>Easy</code>

<br>

Table: <code>Customer</code>

> | Column Name | Type    |  
> |-------------|---------|  
> | id          | int     |  
> | name        | varchar |  
> | referee_id  | int     |  
>   
> In SQL, id is the primary key column for this table.  
> Each row of this table indicates the id of a customer, their name, and the id of the customer who referred them.  
 
<br>

Find the names of the customer that are __not referred by__ the customer with <code>id = 2</code>.

Return the result table in __any order__.

The result format is in the following example.

<br> 

#### Example 1:

> __Input__   
> Customer table:  
> | id | name | referee_id |  
> |----|------|------------|  
> | 1  | Will | null       |  
> | 2  | Jane | null       |  
> | 3  | Alex | 2          |  
> | 4  | Bill | null       |  
> | 5  | Zack | 1          |  
> | 6  | Mark | 2          |  
>
> <br>
>  
> __Output__   
> | name |  
> |------|  
> | Will |  
> | Jane |  
> | Bill |  
> | Zack |  
