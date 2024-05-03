## [196. Delete Duplicate Emails](https://leetcode.com/problems/delete-duplicate-emails)

<code>Easy</code> <code>Database</code>

<br>

Table: <code>Person</code>

> | Column Name | Type    |  
> |-------------|---------|  
> | id          | int     |  
> | email       | varchar |   
> 
> id is the primary key (column with unique values) for this table.  
> Each row of this table contains an email. The emails will not contain uppercase letters.  

<br>

Write a solution to __delete__ all duplicate emails, keeping only one unique email with the smallest <code>id</code>.

For SQL users, please note that you are supposed to write a <code>DELETE</code> statement and not a <code>SELECT</code> one.

For Pandas users, please note that you are supposed to modify <code>Person</code> in place.

After running your script, the answer shown is the <code>Person</code> table. The driver will first compile and run your piece of code and then show the <code>Person</code> table. The final order of the <code>Person</code> table __does not matter__.

The result format is in the following example.

<br>

#### Example 1:

> __Input:__   
> Person table:  
> | id | email        |  
> |----|--------------|  
> | 1  | john@example |  
> | 2  | bob@example  |  
> | 3  | john@example |
> 
> __Output:__    
> | id | email        |  
> |----|--------------|  
> | 1  | john@example |  
> | 2  | bob@example  |
> 
> __Explanation:__ john@example is repeated two times. We keep the row with the smallest Id = 1.  
