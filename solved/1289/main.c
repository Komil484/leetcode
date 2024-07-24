#include <stdio.h>

// modifies grid
int minFallingPathSum(int** grid, int gridSize, int* gridColSize)
{
    //if (gridSize == 1) return grid[0][0];
    
    int min;
    for (int row = 1; row < gridSize; ++row) {
        for (int col = 0; col < gridSize; ++col) {
            min = !col;
            for (int i = 1; i < gridSize; ++i) {
                if (i == col) continue;
                if (grid[row-1][i] < grid[row-1][min]) {
                    min = i;
                }
            }
            grid[row][col] += grid[row-1][min];
        }
    }
    
    min = 0;
    for (int i = 1; i < gridSize; ++i) {
        if (grid[gridSize-1][i] < grid[gridSize-1][min]) {
            min = i;
        }
    }

    for (int i = 0; i < gridSize; ++i) {
        for (int j = 0; j < gridSize; ++j)
            printf("%d ", grid[i][j]);
        printf("\n");
    }
    

    return grid[gridSize-1][min];
}


#include <stdlib.h>

#define GRID_SIZE 3
#define GRID {1,99,99,0,2,1,99,99,4}
#define EXPECTED 7

int main()
{
    int gridarr[][GRID_SIZE] = GRID;
    
    int **grid;
    grid = malloc(GRID_SIZE * sizeof(int*));
    for (int i = 0; i < GRID_SIZE; ++i) {
        grid[i] = gridarr[i];
        /*
        for (int j = 0; j < GRID_SIZE; ++j) {
            grid[i][j] = gridarr[i][j];
        }
        */
    }

    printf("expected: %d\n", EXPECTED);
    printf("output: %d\n", minFallingPathSum(grid, GRID_SIZE, NULL));

    return 0;
}
