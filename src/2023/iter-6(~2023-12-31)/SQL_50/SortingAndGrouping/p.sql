-- 2356. Number of Unique Subjects Taught by Each Teacher --
-- # Write your MySQL query statement below
-- # teacher 의 subject_id 수

select teacher_id, count(DISTINCT subject_id) as cnt
from teacher
group by teacher_id