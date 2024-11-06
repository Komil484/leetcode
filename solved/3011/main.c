#include <stdbool.h>

int getSetBits(int num)
{
    int count = num & 1;
    for (int i = 0; i < 8; i++) {
        num >>= 1;
        count += num & 1;
    }
    return count;
}

int getIndexSectionEnd(int *nums, int startIndex, int len)
{
    int setBits = getSetBits(nums[startIndex]);
    int endIndex = startIndex + 1;
    while (endIndex < len && setBits == getSetBits(nums[endIndex])) {
        ++endIndex;
    }

    return endIndex;
}

int getSmallestElem(int *nums, int start, int end)
{
    int min = nums[start];
    for (int i = start + 1; i < end; ++i) {
        if (nums[i] < min) {
            min = nums[i];
        }
    }
    return min;
}

int getLargestElem(int *nums, int start, int end)
{
    int max = nums[start];
    for (int i = start + 1; i < end; ++i) {
        if (nums[i] > max) {
            max = nums[i];
        }
    }
    return max;
}

bool canSortArray(int *nums, int numsSize)
{
    int start, mid = 0;
    int end = getIndexSectionEnd(nums, mid, numsSize);

    while (end < numsSize) {
        start = mid;
        mid = end;
        end = getIndexSectionEnd(nums, mid, numsSize);
        int l_max = getLargestElem(nums, start, mid);
        int r_min = getSmallestElem(nums, mid, end);
        if (l_max > r_min)
            return false;
    }

    return true;
}
