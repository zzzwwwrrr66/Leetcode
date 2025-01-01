-- # Write your MySQL query statement below
-- # 세변의 길이가 주어질 때 두 변의 길이의 합이 나머지 한 변의 길이보다 작거나 같으면 삼각형이 될 수 없다는 것입니다.

select 
  *, 
  IF(x + y > z and x + z > y and z + y > x, 'Yes', 'No') as triangle
from Triangle
