## [1757. Recyclable and Low Fat Products](https://leetcode.com/problems/recyclable-and-low-fat-products)

<code>Easy</code>

<br>

Table: <code>Products</code>

> | Column Name | Type    |
> |-------------|---------|
> | product_id  | int     |
> | low_fats    | enum    |
> | recyclable  | enum    |
> 
> product_id is the primary key (column with unique values) for this table.
> low_fats is an ENUM (category) of type ('Y', 'N') where 'Y' means this product is low fat and 'N' means it is not.
> recyclable is an ENUM (category) of types ('Y', 'N') where 'Y' means this product is recyclable and 'N' means it is not.

<br>

Write a solution to find the ids of products that are both low fat and recyclable.

Return the result table in __any order__.

The result format is in the following example.

<br>

#### Example 1:

> __Input__  
> Products table:  
> | product_id  | low_fats | recyclable |  
> |-------------|----------|------------|  
> | 0           | Y        | N          |  
> | 1           | Y        | Y          |  
> | 2           | N        | Y          |  
> | 3           | Y        | Y          |  
> | 4           | N        | N          |  
>
> <br>
>
> __Output__
> | product_id  |  
> |-------------|  
> | 1           |  
> | 3           |  
> 
> <br>
>
> __Explanation__   
> Only products 1 and 3 are both low fat and recyclable.  
