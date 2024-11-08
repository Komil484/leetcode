#include <stdlib.h>

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *getMaximumXor(int *nums, int numsSize, int maximumBit, int *returnSize)
{
    int *resultList = malloc(sizeof(int) * numsSize);
    int allSet = (1 << maximumBit) - 1;

    int cumulXOR = 0;
    for (int i = 0; i < numsSize; ++i) {
        int j = numsSize - i - 1;
        cumulXOR ^= nums[i];
        resultList[j] = allSet ^ cumulXOR;
    }

    *returnSize = numsSize;
    return resultList;
}
