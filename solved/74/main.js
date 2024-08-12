/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let m = matrix.length;
    let n = matrix[0].length;


    if (target > matrix[m-1][n-1]) return false;

    let i = 0;
    let j = m - 1;
    
    while (i !== j) {
        let mid = Math.floor((i + j) / 2);
        if (target <= matrix[mid][n - 1]) j = mid;
        else i = mid + 1;
    }

    let row = i;


    if (target > matrix[row][n-1]) return false;

    i = 0;
    j = n - 1;
    while (i !== j) {
        let mid = Math.floor((i + j) / 2);
        if (target <= matrix[row][mid]) j = mid;
        else i = mid + 1;
    }

    let col = i;


    return matrix[row][col] === target;
};
