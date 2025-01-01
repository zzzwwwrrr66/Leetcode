-- # Write your MySQL query statement below
-- # 중복되는 레코드 있음
-- # posion 1 ~ 500
-- # rating 1 ~ 5 -> 3미만은 poor_query

select 
query_name, 
round(SUM(rating / position) / count(*),2) as quality, 
round((count(case when rating < 3 then 1 else null end) / count(*)) * 100,2) as poor_query_percentage
from Queries
where query_name is not null
group by query_name;

-- r.sql --
SELECT 
	query_name,
	ROUND(AVG(rating / position), 2) AS quality,
	ROUND(AVG(rating < 3) * 100, 2) AS poor_query_percentage 
FROM 
	Queries
WHERE 
  query_name is not null
GROUP BY 
	query_name