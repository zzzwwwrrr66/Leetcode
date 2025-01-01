-- # Write your MySQL query statement below
-- # 직원정보, reports_to => 리포트해야하는 아이디
select 
  e2.employee_id, 
  e2.name,
  count(e1.reports_to) as reports_count,
  ROUND(AVG(e1.age)) as average_age
from Employees e1
left join Employees e2
on e1.reports_to = e2.employee_id
where e1.reports_to is not null
group by e1.reports_to
order by e2.employee_id


-- solutions 1 --
select 
  mgr.employee_id, 
  mgr.name, 
  COUNT(emp.employee_id) as reports_count, 
  ROUND(AVG(emp.age)) as average_age
from employees emp 
join employees mgr
on emp.reports_to = mgr.employee_id
group by employee_id
order by employee_id


-- solutions 1 --
SELECT 
  E1.employee_id, 
  E1.name, 
  COUNT(E2.employee_id) reports_count,
  ROUND(AVG(E2.age)) average_age FROM Employees E1 
INNER JOIN Employees E2
ON E1.employee_id = E2.reports_to 
GROUP BY E1.employee_id, E1.name 
ORDER BY employee_id