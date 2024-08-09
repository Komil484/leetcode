/**
 * @param {number[][]} grid
 * @return {number}
 */
var numMagicSquaresInside = function(grid) {
    const isMagicSquare = (grid, i, j) => {
        if (grid[i+1][j+1] !== 5) return false;

        let counts = Array.from({length: 9}, _ => 0);
        for (let r = 0; r < 3; r++) {
            for (let c = 0; c < 3; c++) {
                let cell = grid[i+r][j+c];
                if (cell < 1 || cell > 9) return false;
                if (counts[cell-1] === 1) return false;
                else counts[cell-1] = 1;
            }
        }

        for (let k = 0; k < 3; k++) {
            if (grid[i+k][j] + grid[i+k][j+1] + grid[i+k][j+2] !== 15) return false;
        }

        for (let k = 0; k < 3; k++) {
            if (grid[i][j+k] + grid[i+1][j+k] + grid[i+2][j+k] !== 15) return false;
        }

        return true;
    };

    if (grid.length < 3 || grid[0].length < 3) return 0;
    
    let total = 0;
    for (let i = 0; i < grid.length - 2; i++) {
        for (let j = 0; j < grid[0].length - 2; j++) {
            if (isMagicSquare(grid, i, j)) total++;
        }
    }

    return total;
};
