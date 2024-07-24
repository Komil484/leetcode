void print_arr(int*, int);

#include <stdlib.h>

int compare(const void *a, const void *b)
{
    int x = *(int*)a;
    int y = *(int*)b;
    if (x < y) return -1;
    if (x > y) return 1;
    return 0;
}

int minIncrementForUnique(int* nums, int numsSize)
{
    qsort(nums, numsSize, sizeof(int), compare);

    int total = 0;
    int prev = -1, temp;
    
    for (int i = 0; i < numsSize; ++i) {
        if (prev >= nums[i]) {
            total += prev - nums[i] + 1;
            nums[i] = prev + 1;
        }
        prev = nums[i];
    }

    return total;
}

/*
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                 TEST
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
*/

#include <stdio.h>
#include <stdlib.h>

#define SIZE 6

// modulo max 101, seed default 0
void randomize(int *arr, int size, int modulo, int seed) {
    for (int i = 0; i < SIZE; ++i) {
        arr[i] = ((109 * (i + seed) + 89) % 101) % modulo;
    }
}

void print_arr(int *arr, int size)
{
    for (int i = 0; i < size; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(void)
{
    int arr[SIZE] = {3,2,1,2,1,7};

    printf("array:\n");
    print_arr(arr, SIZE);

    int result = minIncrementForUnique(arr, SIZE);

    printf("\nresult:\n");
    printf("%d\n", result);
    
    return 0;
}
