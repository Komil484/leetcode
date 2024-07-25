/**
 * @param {number} n
 * @param {number} k
 * @param {number} row
 * @param {number} column
 * @return {number}
 */
var knightProbability = function(n, k, row, column) {
    let prev = Array.from({length: n}, _ => Array.from({length: n}, _ => 0));
    let next = Array.from({length: n}, _ => Array.from({length: n}, _ => 0));
    next[row][column] = 1;

    for (let i = 0; i < k; i++) {
        let temp = prev;
        prev = next;
        next = temp;
        chessBoardNext(prev, next);
    }

    return next.reduce((acc, current) => acc + current.reduce((acc, current) => acc + current), 0);
};

function chessBoardNext(prev, next) {
    for (const [i, row] of next.entries()) {
        for (const [j, col] of row.entries()) {
            next[i][j] = get_next_p(prev, i, j);
        }
    }
}

function get_next_p(board, i, j) {
    let total = 0;
    for (let x = 0; x < 8; x++) {
        let offset = [1, 2];
        if (x & 1) offset.reverse();
        if (x & 2) offset[0] *= -1;
        if (x & 4) offset[1] *= -1;
        total += get_index(board, i + offset[0], j + offset[1]);
    }
    return total / 8;
}

function get_index(board, i, j) {
    if (i < 0 || j < 0 || i > board.length - 1 || j > board.length - 1) return 0;
    return board[i][j];
}


let n = 3;
let k = 2;
let row = 0;
let col = 0;
console.log(knightProbability(n, k, row, col));
