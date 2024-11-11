#include <stdbool.h>

void updateArr(int *arr, unsigned int num, int diff)
{
    for (int i = 0; i < 32; ++i) {
        if (num & (1U << i)) {
            arr[i] += diff;
        }
    }
}

int getORfromBits(int *arr)
{
    int arrNum = 0;
    for (int i = 0; i < 32; ++i) {
        if (arr[i]) {
            arrNum |= (1U << i);
        }
    }

    return arrNum;
}

int minimumSubarrayLength(int *nums, int numsSize, int k)
{
    int bits[32] = {0};

    int left = 0;
    int right = 0;
    int min = numsSize + 1;

    updateArr(bits, nums[0], 1);
    while (left <= right && right < numsSize) {
        int subarrSize = right - left + 1;
        if (getORfromBits(bits) >= k) {
            if (subarrSize < min) {
                min = subarrSize;
            }
            updateArr(bits, nums[left], -1);
            ++left;
        } else {
            ++right;
            if (left <= right && right < numsSize) {
                updateArr(bits, nums[right], 1);
            }
        }
    }

    if (min > numsSize) {
        return -1;
    }
    return min;
}
