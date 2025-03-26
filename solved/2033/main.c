#include <stdlib.h>
#include <math.h>

int compare_int(const void *a, const void *b)
{
    int _a = *(const int *)a;
    int _b = *(const int *)b;
    return (_a > _b) - (_a < _b);
}

int minOperations(int **grid, int gridSize, int *gridColSize, int x)
{
    int m = gridSize;
    int n = gridColSize[0];

    int mod = grid[0][0] % x;

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            if (grid[i][j] % x != mod) {
                return -1;
            }
        }
    }

    long long total = 0;

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            total += grid[i][j];
        }
    }

    int *arr = malloc(m * n * sizeof(int));

    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            arr[i * n + j] = grid[i][j];
        }
    }

    qsort(arr, m * n, sizeof(int), compare_int);

    int expected1 = arr[m * n / 2];
    int total_op_count1 = 0;
    for (int i = 0; i < m; ++i) {
        for (int j = 0; j < n; ++j) {
            int v = grid[i][j];
            if (v < expected1) {
                total_op_count1 += (expected1 - v) / x;
            } else {
                total_op_count1 += (v - expected1) / x;
            }
        }
    }

    if ((m * n) % 2 == 0) {
        int expected2 = arr[m * n / 2 - 1];
        int total_op_count2 = 0;
        for (int i = 0; i < m; ++i) {
            for (int j = 0; j < n; ++j) {
                int v = grid[i][j];
                if (v < expected2) {
                    total_op_count2 += (expected2 - v) / x;
                } else {
                    total_op_count2 += (v - expected2) / x;
                }
            }
        }
        return (total_op_count1 < total_op_count2) ? total_op_count1 : total_op_count2;
    }

    return total_op_count1;
}
