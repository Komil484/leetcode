/**
 * @param {number} rows
 * @param {number} cols
 * @param {number} rStart
 * @param {number} cStart
 * @return {number[][]}
 */
var spiralMatrixIII = function(rows, cols, rStart, asdasd) {
    const NORTH = 0;
    const EAST = 1;
    const SOUTH = 2;
    const WEST = 3;

    const cellCount = rows * cols;

    const move = (cell, direction) => {
        cell[direction % 2] += (direction % 3 === 0) ? -1 : 1;
        return cell;
    };

    const isInMatrix = (cell) => cell[0] >= 0 && cell[1] >= 0 && cell[0] < rows && cell[1] < cols;

    let direction = EAST;
    let visited = [[rStart, cStart]];
    let current = [rStart, cStart];
    
    let len = 1;
    let changed = false;

    while (visited.length < cellCount) {
        for (let i = 0; i < len; i++) {
            if (isInMatrix(move(current, direction))) {
                visited.push(current.map(_ => _));
            }
        }
        if (changed) len++;
        changed = !changed;
        direction = (direction + 1) % 4;
    }

    return visited;
};


inputs = [
    [
        1,
        4,
        0,
        0,
    ],
    [
        5,
        6,
        1,
        4,
    ],
];

inputs.forEach(input => console.log(spiralMatrixIII(...input)));
