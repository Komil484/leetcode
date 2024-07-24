#include <stdio.h>

void printarr(int* arr, int size)
{
    for (int i = 0; i < size; ++i) {
        printf("%d, ", arr[i]);
    }
    putchar('\n');
}

// ^ for debugging

#include <stdlib.h>

double findMedianSortedArrays(int* nums1, int nums1Size, int* nums2, int nums2Size)
{
    int totalsize = nums1Size + nums2Size;
    int *arr = malloc(totalsize * sizeof(int));
    int i = 0, i1 = 0, i2 = 0;
    
    while (i1 < nums1Size && i2 < nums2Size) {
        arr[i++] = (nums1[i1] < nums2[i2]) ? nums1[i1++] : nums2[i2++];
    }

    while (i1 < nums1Size) {
        arr[i++] = nums1[i1++];
    }

    while (i2 < nums2Size) {
        arr[i++] = nums2[i2++];
    }

    if (totalsize % 2) {
        return arr[totalsize / 2];
    } else {
        return (arr[totalsize / 2 - 1] + arr[totalsize / 2]) / 2.0;
    }
}

// for debugging

int main()
{
    int n1[] = {1, 2};
    int n2[] = {3, 4};
    
    printf("Median = %f", findMedianSortedArrays(n1, 2, n2, 2));

    return 0;
}
