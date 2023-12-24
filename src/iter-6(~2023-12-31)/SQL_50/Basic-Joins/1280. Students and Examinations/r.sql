-- # Write your MySQL query statement below
-- # Examinations 


-- # Students S
-- # Examinations E
SELECT
Students.student_id,
Students.student_name,
Subjects.subject_name,
COUNT(Examinations.subject_name) AS attended_exams
FROM Students
CROSS JOIN Subjects
LEFT JOIN Examinations
ON Students.student_id = Examinations.student_id
AND Subjects.subject_name = Examinations.subject_name
GROUP BY Students.student_id, Subjects.subject_name
ORDER BY Students.student_id ASC, Subjects.subject_name ASC


SELECT 
s.student_id,
s.student_name,
sub.subject_name,
COUNT(e.subject_name) as attended_exams
FROM Students s
CROSS JOIN Subjects sub
LEFT JOIN Examinations e
ON s.student_id = e.student_id and sub.subject_name = e.subject_name
GROUP BY s.student_id, sub.subject_name
ORDER BY s.student_id, sub.subject_name