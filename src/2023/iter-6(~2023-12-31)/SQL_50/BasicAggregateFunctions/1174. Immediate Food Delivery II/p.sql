-- # Write your MySQL query statement below
-- # 주문날짜와 고객이원하는 날짜가 일치하면 즉시배송
-- # 고객의 첫번째 주문만 count 
-- # 해당고객의 첫번째 주문이 즉시배송이면 count
-- # 해당 고객의 order_date 가 가장빠른것을 count 하고 sum 

select 
-- round((count(case when order_date = customer_pref_delivery_date then 1 else null end) / count(*)) * 100, 2) as immediate_percentage
  ROUND(AVG(order_date = customer_pref_delivery_date) * 100, 2) as immediate_percentage
from 
  delivery
where (customer_id, order_date) in (
  select 
    customer_id, min(order_date) as first_order
  from 
    delivery
  group by 
    customer_id
) 
  