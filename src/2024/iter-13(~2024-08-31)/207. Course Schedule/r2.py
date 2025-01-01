from typing import List
import collections


class Solution:
    def canFinish(self, numCourses: int, prerequisites: List[List[int]]) -> bool:
        # const STATE value
        NOT_CHECKED, CHECKING, COMPLETE = 0, 1, 2

        # make dict map
        courseMap = {i: [] for i in range(numCourses)}
        for crs, pre in prerequisites:
            courseMap[crs].append(pre)

        # make visited map
        visitedMap = dict()
        for i in range(0, numCourses):
            visitedMap[i] = NOT_CHECKED

        print(visitedMap)

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


main = Solution()
# print(main.canFinish(2, [[1, 0]]))
print(main.canFinish(2, [[1, 0], [0, 1]]))
