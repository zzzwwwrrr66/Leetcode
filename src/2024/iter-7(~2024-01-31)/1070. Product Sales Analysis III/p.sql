-- # Write your MySQL query statement below
-- # sale 한 첫해 min(year), product id group

SELECT product_id, year AS first_year, quantity, price
FROM Sales
WHERE (product_id, year) IN (
SELECT product_id, MIN(year) as year
FROM Sales
GROUP BY product_id);

