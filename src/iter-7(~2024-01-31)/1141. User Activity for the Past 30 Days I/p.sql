-- # Write your MySQL query statement below

-- # 2019년 7월 27일까지 30일 동안의 유저 id 수를 카운트 30 일 전 까지 7/27, user_id count 
-- # activity_date group by
select activity_date as day, count(distinct user_id) as active_users
from Activity
where activity_date >= '2019-06-28' and activity_date <= '2019-07-27'
group by activity_date
