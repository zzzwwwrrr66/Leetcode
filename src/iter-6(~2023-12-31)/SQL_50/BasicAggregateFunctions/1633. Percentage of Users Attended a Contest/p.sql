-- # Write your MySQL query statement below
-- # users table 전체 카운트의 퍼센테이지
-- # users 는 전체 카운터 만 있으면 됨
select r.contest_id, round(count(r.user_id) / (select count(*) from Users) * 100,2) as percentage
from Register as r
group by r.contest_id
order by percentage desc, r.contest_id


