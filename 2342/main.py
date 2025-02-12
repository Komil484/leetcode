class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        tupled_nums = [(num, self.getSumOfDigits(num)) for num in nums]
        tupled_nums.sort(key=lambda pair: (pair[1], pair[0]))

        nums_separated = []
        prev_digit_sum = 0

        for (num, digit_sum) in tupled_nums:
            if digit_sum != prev_digit_sum:
                nums_separated.append([num])
            else:
                nums_separated[-1].append(num)
            prev_digit_sum = digit_sum
        
        sums = [(sum(sublist[-2:])) for sublist in nums_separated if len(sublist) >= 2]

        if sums:
            return max(sums)
        
        return -1
        


    def getSumOfDigits(self, num: int) -> int:
        total = 0
        while num > 0:
            total += num % 10
            num //= 10
        return total
