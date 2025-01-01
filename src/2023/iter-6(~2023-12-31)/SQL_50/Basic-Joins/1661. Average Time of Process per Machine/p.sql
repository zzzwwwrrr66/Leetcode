-- # Write your MySQL query statement below
-- # loop 돌리는것과 같다
-- # join 은 loop 1 같은 table 2
-- count 중복없이 구하기 => count(distinct a1.process_id)
select a1.machine_id, count(distinct a1.process_id),round(avg(a2.timestamp - a1.timestamp),3) as processing_time
from Activity a1
left join Activity a2
on a1.machine_id = a2.machine_id and a1.process_id = a2.process_id
and a1.activity_type='start' and a2.activity_type='end'
group by a1.machine_id



-- # 각 프로세트 마다 start, end 가 존재 
-- # ((end + start) + (end + start)) / 각 프로세스의 개수



-- # machine_id 기준 , process_id count , activity_type

-- # function asd () {
-- #   dict = {}
  
-- #   dict.map(v=>{
-- #     a = v.map(v => {
-- #       return Math.sum(...v.map(v=>v.end + v.start))
-- #     });
    
-- #     return a / v.key
-- #   })
-- # }