-- 코드를 입력하세요
SELECT COUNT(1) AS USERS
FROM USER_INFO 
WHERE 1=1
    AND AGE BETWEEN 20 AND 29
    AND JOINED LIKE '2021%'
