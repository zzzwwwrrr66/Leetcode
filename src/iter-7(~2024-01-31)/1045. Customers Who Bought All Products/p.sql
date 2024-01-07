-- # Write your MySQL query statement below
-- # Product 의 count 와 Customer 의 customer_id count 가 같은것 

SELECT  customer_id
FROM Customer 
GROUP BY customer_id
HAVING COUNT(distinct product_key) = (SELECT COUNT(product_key) FROM Product)