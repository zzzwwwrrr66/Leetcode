-- 1378. Replace Employee ID With The Unique Identifier
select EmployeeUNI.unique_id, Employees.name  from Employees
left join EmployeeUNI
on Employees.id = EmployeeUNI.id 


-- 1068. Product Sales Analysis I
select p.product_name, s.year, s.price  from Sales s
left join Product p
on p.product_id = s.product_id

-- 1581. Customer Who Visited but Did Not Make Any Transactions
-- 이미 loop 안에 있다고 생각
-- visited_id 가 있지만 transaction 이 없으면 안산거나 같음 
-- visited_id가 있고 transaction 도 존재하면 산거임
select v.customer_id, count(v.visit_id) as count_no_trans  
from Visits v
left join Transactions t
on v.visit_id = t.visit_id
where t.transaction_id is null
group by v.customer_id;

-- 577. Employee Bonus
select a.name, b.bonus 
from Employee a
left join Bonus b
on a.empId = b.empId 
where b.bonus < 1000 or b.bonus is null