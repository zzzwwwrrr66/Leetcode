-- # Write your MySQL query statement below
-- # AVG
-- # 모든 프로젝트 이하에 들어있는 직원들의 경력 평균

select p.project_id, ROUND(AVG(e.experience_years), 2) as average_years
from project as p
left join Employee as e
on p.employee_id = e.employee_id
group by p.project_id