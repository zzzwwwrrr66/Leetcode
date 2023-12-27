-- # Write your MySQL query statement below
-- # AVG(,units)
select 
p.product_id, 
IFNULL(ROUND(SUM(p.price * u.units) / SUM(u.units), 2), 0) as average_price
from Prices p 
left join UnitsSold u
-- where 말고 on 에서 적어준다 
on p.product_id = u.product_id and DATE(u.purchase_date) BETWEEN p.start_date AND p.end_date
-- # WHERE DATE(u.purchase_date) BETWEEN p.start_date AND p.end_date
group by product_id; -- 앞에 인스턴스를 안붙이면 Prices 의 product_id 전부 표시


-- Prices =
-- | product_id | start_date | end_date   | price |
-- | ---------- | ---------- | ---------- | ----- |
-- | 1          | 2019-02-17 | 2019-02-28 | 5     |
-- | 1          | 2019-03-01 | 2019-03-22 | 20    |
-- | 2          | 2019-02-01 | 2019-02-20 | 15    |
-- | 2          | 2019-02-21 | 2019-03-31 | 30    |
-- | 3          | 2019-02-21 | 2019-03-31 | 30    |
-- UnitsSold =
-- | product_id | purchase_date | units |
-- | ---------- | ------------- | ----- |
-- | 1          | 2019-02-25    | 100   |
-- | 1          | 2019-03-01    | 15    |
-- | 2          | 2019-02-10    | 200   |
-- | 2          | 2019-03-22    | 30    |
-- Output
-- | product_id | average_price |
-- | ---------- | ------------- |
-- | 1          | 6.96          |
-- | 2          | 16.96         |
-- | 3          | 0             |
-- Expected
-- | product_id | average_price |
-- | ---------- | ------------- |
-- | 1          | 6.96          |
-- | 2          | 16.96         |
-- | 3          | 0             |