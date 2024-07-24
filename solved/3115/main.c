int const is_prime[] = {0, 0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0};

int maximumPrimeDifference(int* nums, int numsSize)
{
    int *first = nums;
    int *last = nums + numsSize - 1;
    while (!is_prime[*first]) ++first;
    while (!is_prime[*last]) --last;
    return last - first;
}



// testing
#include <stdio.h>

int nums[] = {4, 2, 9, 5, 3};
int debug[5];

void printarr(int *arr, int size)
{
    for (int i = 0; i < size; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
int main()
{
    for (int i = 0; i < 5; ++i) {
        debug[i] = isPrime(nums[i]);
    }

    printarr(nums, 5);
    printarr(debug, 5);

    printf("%d\n", maximumPrimeDifference(nums, 5));
}
