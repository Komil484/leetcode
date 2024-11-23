/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
#include <stdlib.h>
#include <stdio.h>

char **rotateTheBox(char **box, int boxSize, int *boxColSize, int *returnSize,
                    int **returnColumnSizes)
{
    int rows = boxSize;
    int cols = boxColSize[0];

    *returnSize = cols;
    int *columnSizes = malloc(sizeof(int) * cols);
    for (int i = 0; i < cols; ++i) {
        columnSizes[i] = rows;
    }
    *returnColumnSizes = columnSizes;

    // gravitate right
    for (int row = 0; row < rows; ++row) {
        int last_occupied = cols;
        for (int col = cols - 1; col >= 0; --col) {
            if (box[row][col] == '*') {
                last_occupied = col;
            } else if (box[row][col] == '#') {
                box[row][col] = '.';
                box[row][last_occupied - 1] = '#';
                --last_occupied;
            }
        }
    }

    int r_rows = cols;
    int r_cols = rows;

    // mallocing
    // 1 malloc, memory: [(char *) ptrs_to_rows, (char) row1, row2, row3 ...]
    char **rotatedBox = malloc(sizeof(char *) * r_rows + sizeof(char) * r_rows * r_cols);

    char *rotateBoxContents = (char *)&rotatedBox[r_rows]; // pointer to start of rows
    for (int row = 0; row < r_rows; ++row) {
        rotatedBox[row] = &rotateBoxContents[row * r_cols];
    }

    // rotate
    for (int row = 0; row < r_rows; ++row) {
        for (int col = 0; col < r_cols; ++col) {
            rotatedBox[row][col] = box[r_cols - col - 1][row];
        }
    }

    return rotatedBox;
}
