void merge(int* nums1, int nums1Size, int m, int* nums2, int nums2Size, int n)
{
    int *pt1 = nums1 + m - 1;
    int *pt2 = nums2 + n - 1;
    int *res = nums1 + m + n - 1;

    while (pt1 >= nums1 && pt2 >= nums2) {
        *res = *pt1 > *pt2 ? *pt1-- : *pt2--;
        --res;
    }

    while (pt2 >= nums2) {
        *res = *pt2--;
        --res;
    }
}

#include <stdio.h>
#include <stdlib.h>

#define SIZE1 5
#define SIZE2 10

void print_arr(int *arr, int size)
{
    for (int i = 0; i < size; ++i) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main(void)
{
    int arr1[SIZE1 + SIZE2] = {0};
    int arr2[SIZE2];

    for (int i = 0; i < SIZE1; ++i) {
        arr1[i] = i * i;
    }

    for (int i = 0; i < SIZE2; ++i) {
        arr2[i] = i;
    }

    print_arr(arr1, SIZE1 + SIZE2);
    print_arr(arr2, SIZE2);
    printf("\nresult:\n");
    merge(arr1, SIZE1 + SIZE2, SIZE1, arr2, SIZE2, SIZE2);
    print_arr(arr1, SIZE1 + SIZE2);
    
    return 0;
}
