SELECT *
FROM
(
    SELECT NAME, COUNT(NAME) AS COUNT
    FROM ANIMAL_INS 
    GROUP BY NAME
    ORDER BY NAME
) a
WHERE COUNT>=2
