int min(int a, int b)
{
    return a < b ? a : b;
}

int max(int a, int b)
{
    return a > b ? a : b;
}

int maxArea(int* height, int heightSize)
{
    int *left = height;
    int *right = height + heightSize - 1;
    int largest = 0;

    for (int width = heightSize - 1; width > 0; --width) {
        largest = max(largest, width * min(*left, *right));
        if (*left < *right) {
            ++left;
        } else {
            --right;
        }
    }

    return largest;
}

#include <stdio.h>

#define HEIGHTS {1,8,6,2,5,4,8,3,7}
#define EXPECTED 49

int main()
{
    int heights[] = HEIGHTS;
    int size = sizeof(heights) / sizeof(int);

    for (int i = 0; i < size; ++i) {
        printf("%d ", heights[i]);
    }
    printf("\n");

    printf("expected: %d\n", EXPECTED);
    printf("output: %d\n", maxArea(heights, size));
}
