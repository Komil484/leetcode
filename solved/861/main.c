void flipRow(int* row, int colSize)
{
    for (int *pt = row; pt < row + colSize; ++pt) {
        *pt = 1 - *pt;
    }
}

void flipCol(int** grid, int rowSize, unsigned col_i)
{
    for (int i = 0; i < rowSize; ++i) {
        grid[i][col_i] = 1 - grid[i][col_i];
    }
}

_Bool shouldFlipCol(int **grid, int rowSize, unsigned col_i)
{
    unsigned ones = 0;
    for (int i = 0; i < rowSize; ++i) {
        ones += grid[i][col_i];
    }
    return ones < rowSize - ones;
}

unsigned int rowToInt(int* row, int colSize)
{
    unsigned total = 0;
    for (int i = 0; i < colSize; ++i) {
        total += row[i] << (colSize - i - 1);
    }
    return total;
}

int matrixScore(int** grid, int gridSize, int* gridColSize)
{
    int const colSize = gridColSize[0];
    unsigned int total = 0;

    for (int i = 0; i < gridSize; ++i) {
        if (grid[i][0] == 0) {
            flipRow(grid[i], colSize);
        }
    }
    
    for (int i = 0; i < colSize; ++i) {
        if (shouldFlipCol(grid, gridSize, i)) {
            flipCol(grid, gridSize, i);
        }
    }
    
    for (int i = 0; i < gridSize; ++i) {
        total += rowToInt(grid[i], colSize);
    }

    return total;
}



#include <stdio.h>

void print_row(int *row, int colSize)
{
    for (int i = 0; i < colSize; ++i) {
        printf("%d ", row[i]);
    }
    printf("\n");
}

void print_grid(int **grid, int rowSize, int colSize)
{
    for (int i = 0; i < rowSize; ++i) {
        print_row(grid[i], colSize);
    }
    printf("\n");
}

int main(void)
{
    int row1[] = {0, 0, 1, 1};
    int row2[] = {1, 0, 1, 0};
    int row3[] = {1, 1, 0, 0};
    int *grid[] = {row1, row2, row3};
    int gridColSize = 4;

    print_grid(grid, 3, 4);

    printf("matrix score: %d\n", matrixScore(grid, 3, &gridColSize));

    return 0;
}
