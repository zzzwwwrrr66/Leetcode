-- # Write your MySQL query statement below
-- # loop if managerId >= 5: return name
select e1.name from Employee e1
where e1.id in (
  select e2.managerId 
  from Employee e2
  group by e2.managerId
  having count(e2.id) >= 5
)




-- using join 
SELECT e2.name
from Employee e1
INNER JOIN Employee e2
ON e1.managerId = e2.id
GROUP BY e1.managerId
HAVING COUNT(e1.id) >= 5