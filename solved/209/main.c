int minSubArrayLen(int target, int* nums, int numsSize) {
    int *first = nums, *last = nums;
    const int const *end = nums + numsSize;
    unsigned int min = numsSize;
    int total = nums[0];

    while (last >= first) {
        if (total >= target) {
            if (min > last - first + 1) {
                min = last - first + 1;
            }
            total -= *first;
            ++first;
        } else {
            if (++last >= end) {
                break;
            }
            total += *last;
        }
    }

    if (first == nums && last == end) {
        return 0;
    } else {
        return min;
    }
}
