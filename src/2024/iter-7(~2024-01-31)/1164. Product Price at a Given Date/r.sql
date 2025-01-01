-- # 2019-08-16 이전의 것들 없으면 10
select 
    distinct product_id, 10 as price 
from Products 
where 
    product_id not in(select distinct product_id from Products where change_date <='2019-08-16' )
union 
-- # 2019-08-16 이전의 것들 있으면 new_price
select 
    product_id, 
    new_price as price 
from Products 
where 
    (product_id, change_date) in (
        select 
        product_id, 
        max(change_date) as date 
        from Products 
        where change_date <='2019-08-16' group by product_id
    )
