/**
 * @param {string[]} grid
 * @return {number}
 */

const UP = 0;
const RIGHT = 1;
const DOWN = 2;
const LEFT = 3;

class Cell {
    constructor(i, j, side, div) {
        this.i = i;
        this.j = j;
        this.side = side;

        if (div === " ") {
            this.get_connections = this.connections_space;
        } else if (div === "/"){
            this.get_connections = this.connections_slash;
        } else {
            this.get_connections = this.connections_backslash;
        }
    }

    connections() {
        return this.get_connections(this.side);
    }

    getSide(side) {
        if (side === UP) return this.up();
        if (side === RIGHT) return this.right();
        if (side === DOWN) return this.down();
        return this.left();
    }

    up() {
        return [this.i, this.j-1];
    }

    right() {
        return [this.i+1, this.j];
    }

    down() {
        return [this.i, this.j+1];
    }

    left() {
        return [this.i-1, this.j];
    }

    connections_space(side) {
        if (side === UP) return [
            [this.i, this.j, RIGHT],
            [this.i, this.j, DOWN],
            [this.i, this.j, LEFT],
            [...this.up(), DOWN],
        ];
        if (side === RIGHT) return [
            [this.i, this.j, UP],
            [this.i, this.j, DOWN],
            [this.i, this.j, LEFT],
            [...this.right(), LEFT],
        ];
        if (side === DOWN) return [
            [this.i, this.j, UP],
            [this.i, this.j, RIGHT],
            [this.i, this.j, LEFT],
            [...this.down(), UP],
        ];
        if (side === LEFT) return [
            [this.i, this.j, UP],
            [this.i, this.j, RIGHT],
            [this.i, this.j, DOWN],
            [...this.left(), RIGHT],
        ];
    }

    connections_slash(side) {
        if (side === UP) return [
            [this.i, this.j, LEFT],
            [...this.up(), DOWN],
        ];
        if (side === RIGHT) return [
            [this.i, this.j, DOWN],
            [...this.right(), LEFT],
        ];
        if (side === DOWN) return [
            [this.i, this.j, RIGHT],
            [...this.down(), UP],
        ];
        if (side === LEFT) return [
            [this.i, this.j, UP],
            [...this.left(), RIGHT],
        ];
    }

    connections_backslash(side) {
        if (side === UP) return [
            [this.i, this.j, RIGHT],
            [...this.up(), DOWN],
        ];
        if (side === RIGHT) return [
            [this.i, this.j, UP],
            [...this.right(), LEFT],
        ];
        if (side === DOWN) return [
            [this.i, this.j, LEFT],
            [...this.down(), UP],
        ];
        if (side === LEFT) return [
            [this.i, this.j, DOWN],
            [...this.left(), RIGHT],
        ];
    }
}

const MAX_GRID_LENGTH = 30;
const INVERSE_MAX_GRID_LENGTH = 1 / MAX_GRID_LENGTH;

var regionsBySlashes = function(grid) {
    const encode = (i, j, side) => (side * MAX_GRID_LENGTH + i) * MAX_GRID_LENGTH + j;
    const decode = (n) => {
        const j = n % MAX_GRID_LENGTH;
        n = Math.round(n * INVERSE_MAX_GRID_LENGTH);
        const i = n % MAX_GRID_LENGTH;
        const side = Math.round(n * INVERSE_MAX_GRID_LENGTH);
        return [i, j, side];
    };

    let unvisited = new Map();
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid.length; j++) {
            for (let side = 0; side < 4; side++) {
                unvisited.set(encode(i, j, side), new Cell(i, j, side, grid[i][j]));
            }
        }
    }

    const visit = (root_cell) => {
        //console.log(root_cell.i, root_cell.j, root_cell.side);
        //console.log(root_cell.connections());
        for (let [i, j, side] of root_cell.connections()) {
            if (i < 0 || j < 0 || i >= grid.length || j >= grid.length) continue;
            let location = encode(i, j, side);
            if (!unvisited.has(location)) continue;
            let cell = unvisited.get(location);
            unvisited.delete(location);
            visit(cell);
        }
    }

    let totalRegions = 0;

    for (; unvisited.size > 0; totalRegions++) {
        //console.log("\n\nNEW REGION\n\n");
        let [location, cell] = unvisited.entries().next().value;
        unvisited.delete(location);
        visit(cell);
    }

    return totalRegions;
};



let grids = [
    [" /","/ "],
    [" /","  "],
    ["/\\","\\/"],
]

grids.forEach(grid => console.log(regionsBySlashes(grid)));

