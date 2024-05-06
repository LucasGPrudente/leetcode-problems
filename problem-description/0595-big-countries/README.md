## [595. Big Countries](https://leetcode.com/problems/big-countries)

<code>Easy</code>

<br>

Table: <code>World</code>  
> | Column Name | Type    |  
> |-------------|---------|  
> | name        | varchar |  
> | continent   | varchar |  
> | area        | int     |  
> | population  | int     |  
> | gdp         | bigint  |  
>   
> name is the primary key (column with unique values) for this table.  
> Each row of this table gives information about the name of a country, the continent to which it belongs, its area, the population, and its GDP value.  
 
<br>

A country is __big__ if:

- it has an area of at least three million (i.e., <code>3000000 km2</code>), or
- it has a population of at least twenty-five million (i.e., <code>25000000</code>).

Write a solution to find the name, population, and area of the __big countries__.

Return the result table in __any order__.

The result format is in the following example.

<br>

Example 1:

> __Input:__   
> World table:  
> | name        | continent | area    | population | gdp          |  
> |-------------|-----------|---------|------------|--------------|  
> | Afghanistan | Asia      | 652230  | 25500100   | 20343000000  |  
> | Albania     | Europe    | 28748   | 2831741    | 12960000000  |  
> | Algeria     | Africa    | 2381741 | 37100000   | 188681000000 |  
> | Andorra     | Europe    | 468     | 78115      | 3712000000   |  
> | Angola      | Africa    | 1246700 | 20609294   | 100990000000 |  
>   
> __Output:__   
> | name        | population | area    |  
> |-------------|------------|---------|  
> | Afghanistan | 25500100   | 652230  |  
> | Algeria     | 37100000   | 2381741 |  
