-- # Write your MySQL query statement below
-- # 월별, 국가별로 거래 건수와 총액, 승인된 거래 건수와 총액을 찾는 SQL 쿼리를 작성하세요.
-- # total amount state 상관없음

-- my solution --
select 
LEFT(trans_date, 7) AS month,
country,
count(*) as trans_count,
count(case when state = 'approved' then 1 else null end) as approved_count,
SUM(amount) as trans_total_amount,
SUM(case when state = 'approved' then amount else 0 end) as approved_total_amount
from 
Transactions
group by 
month, country;


-- reference solution --
SELECT 
LEFT(trans_date, 7) AS month, country, 
COUNT(id) AS trans_count, 
SUM(state = 'approved') AS approved_count, 
SUM(amount) AS trans_total_amount, 
SUM(CASE 
    WHEN state = 'approved' THEN amount 
    ELSE 0 
    END) AS approved_total_amount
FROM Transactions
GROUP BY month, country