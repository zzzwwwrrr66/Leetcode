-- # Write your MySQL query statement below
-- # count 한개 있는것중 가장큰것 
select max(num) as num
from (
  select num
  from MyNumbers
  group by num
  having count(num) = 1
) AS unique_numbers;


