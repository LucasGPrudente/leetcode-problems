# Write a solution to report the name and bonus amount of each employee with a bonus less than 1000

SELECT name, bonus FROM Employee AS E
LEFT JOIN Bonus AS B
ON E.empId = B.empId
WHERE IFNULL(B.bonus, 0) < 1000;
