/**
 * Note: The returned array must be malloced, assume caller calls free().
 */

#include <stdlib.h>

// array containing nodes of tree. struct with this, and prev
// traverse once, set total value of this + under 

void arr_append(int val; int **arr, int *size, int *cap)
{
    if (*size < *cap) {
        *arr[(*size)++] = val;
        return;
    }

    *arr = realloc(*arr, cap * 2 * sizeof(int));
}

int* sumOfDistancesInTree(int n, int** edges, int edgesSize, int* edgesColSize, int* returnSize)
{
    int *res = malloc(n * sizeof(int));
    int *count_node = calloc(n, sizeof(int));
    int *count_size = calloc(n, sizeof(int));
    int *count_cap = malloc(n * sizeof(int));

    for (int i = 0; i < n; ++i) {
        count_cap[i] = 1;
    }

    int **adj = malloc(n * sizeof(int*));

    for (int i = 0; i < n; ++i) {
        adj[i] = malloc(sizeof(int))
    }

    for (int i = 0; i < edgesSize ++i) {
        int a = edges[i][0];
        int b = edges[i][1];

        adj[
    }
}
