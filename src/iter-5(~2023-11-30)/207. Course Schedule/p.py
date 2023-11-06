from typing import List
import collections

# https://leetcode.com/problems/course-schedule

# Graph 문제 ? 1 loop 하면서 node 찾아가기
# 그래프 visited check list 작성


# hash map 문제?? 미리 map 작성

"""
numCourses => total course 만을 제공, {2}면 두과목이 존재 한다는 뜻 
prerequisites => given courses 1st arg is course and 2nd course is process to 1st course
"""


def canFinish(numCourses: int, prerequisites: List[List[int]]) -> bool:
    # const STATE value
    NOT_CHECKED, CHECKING, COMPLETE = 0, 1, 2

    # make dict map
    courseMap = collections.defaultdict(list)
    for course, preCourse in prerequisites:
        courseMap[course].append(preCourse)

    # make visited map
    visitedMap = dict()
    for i in range(0, numCourses):
        visitedMap[i] = NOT_CHECKED

    # declare recursion function
    def recursion(course) -> bool:
        if visitedMap[course] != NOT_CHECKED:
            return visitedMap[course] == CHECKING

        visitedMap[course] = CHECKING

        for preCourse in courseMap[course]:
            if recursion(preCourse):
                return True

        visitedMap[course] = COMPLETE

        return False

    # do recursion check
    for courseIdx in range(0, numCourses):
        if recursion(courseIdx):
            return False

    return True


print(canFinish(2, [[1, 0]]))
print(canFinish(2, [[1, 0], [0, 1]]))
