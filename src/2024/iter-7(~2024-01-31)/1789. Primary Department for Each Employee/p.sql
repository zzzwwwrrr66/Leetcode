-- # Write your MySQL query statement below
-- # department_id => 부서 아이디
-- # primary_flag => y, n 직원의 기본부서인지 아닌지 
-- # 기본적으로는 기본부서만 기본부서가 없고 하나만 있는 사람은 그부서

select employee_id, department_id
from Employee
where primary_flag = 'Y' or employee_id in (
  select employee_id 
  from Employee
  group by employee_id
  having count(employee_id) = 1
)
group by employee_id



-- using UNION 
SELECT employee_id, department_id 
FROM Employee
WHERE primary_flag = 'Y'
UNION
SELECT employee_id, department_id 
FROM Employee 
GROUP BY employee_id
HAVING COUNT(employee_id) = 1