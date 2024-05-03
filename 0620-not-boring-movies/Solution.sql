# Report the movies with an odd-numbered ID and a description that is not "boring"
# Return the result table ordered by rating in descending order

SELECT * FROM Cinema AS c
WHERE c.description != "boring"
AND MOD(c.id, 2) = 1
ORDER BY c.rating DESC;
