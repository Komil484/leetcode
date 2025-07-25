func maxSum(nums []int) int {
    existingNums := [201]bool{}
    for _, num := range nums { 
        existingNums[num + 100] = true
    }

    total := 0
    for num := 1; num <= 100; num++ {
        if existingNums[num + 100] {
            total += num
        }
    }

    if total > 0 {
        return total
    }

    for num := 100; num >= -100; num-- {
        if existingNums[num + 100] {
            return num
        }
    }

    return 0
}
