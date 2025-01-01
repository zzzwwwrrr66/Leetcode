-- 1757. Recyclable and Low Fat Products
select product_id from Products where low_fats = 'Y' and recyclable = 'Y'

-- 584. Find Customer Referee
select name from Customer where referee_id <> 2 or referee_id is null

-- 595. Big Countries
select name, population, area from World where area >= 3000000 or population >= 25000000

-- 1148. Article Views I
select distinct author_id as id  from Views where author_id = viewer_id order by author_id;

-- 1683. Invalid Tweets
select tweet_id from Tweets where CHAR_LENGTH(content) > 15



-- 197. Rising Temperature
-- hashmap curr Date : (filter => v => v.temperature < currDate && v.temperature - currDate = 1&& currDate.temperature > v.temperature)
-- 
select id from Weather curr
where exists (
  select recordDate from Weather prev
  where curr.temperature > prev.temperature and prev.recordDate = DATE_SUB(curr.recordDate, INTERVAL 1 DAY)
);
-- OR --
select id from Weather curr
where exists (
  select recordDate from Weather prev
  where curr.temperature > prev.temperature and prev.recordDate = curr.recordDate - INTERVAL '1' DAY
);