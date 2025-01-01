with cte as (
    select 
        id,
        num,
        lead(num,1) over() num1,
        lead(num,2) over() num2
    from logs
)

select DISTINCT num as ConsecutiveNums from cte
where num = num1 and num = num2