# Write your MySQL query statement below
select 
s.user_id, 
-- ifnull(round(count(case when c.action = 'confirmed' then 1 else null end) / count(c.user_id),2), 0) as confirmation_rate,
round(avg(if(c.action="confirmed",1,0)),2) as confirmation_rate
from Signups s
left join Confirmations c
on s.user_id = c.user_id
group by s.user_id
