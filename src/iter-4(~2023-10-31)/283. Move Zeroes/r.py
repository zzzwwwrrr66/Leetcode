def moveZeroes(nums: list) -> None:
    slow = 0
    for fast in range(len(nums)):
        if nums[fast] != 0 and nums[slow] == 0:
            nums[slow], nums[fast] = nums[fast], nums[slow]

        # wait while we find a non-zero element to
        # swap with you
        if nums[slow] != 0:
            slow += 1


moveZeroes([0, 1, 0, 3, 12])
