def sortColors(nums):
    red, white, blue = 0, 0, len(nums) - 1

    while white <= blue:
        if nums[white] == 0:
            nums[red], nums[white] = nums[white], nums[red]
            white += 1
            red += 1
        elif nums[white] == 1:
            white += 1
        else:
            nums[white], nums[blue] = nums[blue], nums[white]
            blue -= 1


# sortColors([2, 0, 2, 1, 1, 0])
sortColors([2, 0, 1])


# red, white, blue 의 bucket 은 숫자였다.
# 숫자를 기반으로 list swap 을 진행한다.
# 각각의 key의 bucket 의 종류 => 숫자, array, hashMap
# dual-pivot 정렬알고리즘 ?
