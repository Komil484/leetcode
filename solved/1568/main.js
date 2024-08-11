/**
 * @param {number[][]} grid
 * @return {number}
 */

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

const MAX_GRID_LENGTH = 30;


const isInBounds = (i, j, grid) => i >= 0 && j >= 0 && i < grid.length && j < grid[0].length;

const getSide = (i, j, side) => {
    if (side === UP) return [i, j-1];
    if (side === RIGHT) return [i+1, j];
    if (side === DOWN) return [i, j+1];
    if (side === LEFT) return [i-1, j];
    throw {};
}

const getConnections = (i, j, grid) => {
    let connections = [];
    for (let k = 0; k < 4; k++) {
        let side = getSide(i, j, k);
        //console.log("possible connection", side);
        if (!isInBounds(...side, grid)) continue;
        if (grid[side[0]][side[1]] === 1) connections.push(side);
        //console.log(connections);
    }
    return connections;
}


const encode = (i, j) => i * MAX_GRID_LENGTH + j;
const decode = (n) => {
    const j = n % MAX_GRID_LENGTH;
    const i = Math.floor(n / MAX_GRID_LENGTH);
    return [i, j];
};


const visit = (i, j, grid, unvisited) => {
    //console.log(i, j);
    //console.log(getConnections(i, j, grid));
    for (let [i2, j2] of getConnections(i, j, grid)) {
        let location = encode(i2, j2);
        if (!unvisited.has(location)) continue;
        unvisited.delete(location);
        visit(...decode(location), grid, unvisited);
    }
}

const countIslands = (grid) => {
    let unvisited = new Set();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 1) continue;
            //console.log("adding", i, j);
            unvisited.add(encode(i, j));
        }
    }

    let totalRegions = 0;
    while (unvisited.size > 0) {
        //console.log("\n\nNEW REGION\n");
        let location = unvisited.values().next().value;
        //console.log(...decode(location));
        unvisited.delete(location);
        visit(...decode(location), grid, unvisited);
        totalRegions++;
    }
    return totalRegions;
}


var minDays = function(grid) {
    if (countIslands(grid) !== 1) return 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 1) continue;
            if (getConnections(i, j, grid).length === 1) {
                let total = 0;
                for (const row of grid) {
                    for (const cell of row) {
                        total += cell;
                    }
                }
                if (total === 2) return 2;
                return 1;
            };
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] !== 1) continue;
            //console.log("changing", i, j);
            grid[i][j] = 0;
            if (countIslands(grid) !== 1) return 1;
            grid[i][j] = 1;
        }
    }

    return 2;
};


let grids = [
    [
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,1,0,0],
        [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,1,0],
        [1,1,1,0,1,0,1,1,0,1,1,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,1,0,1,0,1,0,1],
        [1,1,1,1,1,1,0,0,1,1,1,1,1,1,1,1,1,0],
        [1,1,1,1,1,1,0,1,1,1,1,1,1,1,1,0,1,0],
        [1,1,1,1,1,1,0,1,1,0,1,1,1,1,1,0,0,1],
        [1,0,1,1,1,1,1,1,1,0,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,1,1,1,0,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,1,1,1,0,0,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,0,0,0],
        [1,1,1,0,1,1,0,1,1,1,1,1,0,1,1,1,0,0],
        [0,1,1,0,1,1,0,1,1,1,1,1,1,0,1,1,1,1],
        [1,0,0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,1],
        [1,1,1,1,1,1,1,1,0,1,1,1,1,1,1,0,1,1],
        [1,1,1,0,1,1,0,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,1,1,1,0,1,0,1,1,1,1,1,1,1,1,1,1],
        [1,1,0,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1]
    ],
    [
        [1,1,0,1,1],
        [1,1,1,1,1],
        [1,1,0,1,1],
        [1,1,0,1,1],
    ],
    [[0,1,1,0],[0,1,1,0],[0,0,0,0]],
    [[1,1]],
];

grids.forEach(grid => console.log(minDays(grid)));
