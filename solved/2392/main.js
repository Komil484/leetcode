/**
 * @param {number} k
 * @param {number[][]} rowConditions
 * @param {number[][]} colConditions
 * @return {number[][]}
 */

var buildMatrix = function(k, rowConditions, colConditions) {
    let matrix = Array.from({length: k}, _ => Array.from({length: k}, _ => 0));

    rowConditions.forEach(([i, j]) => matrix[i-1][j-1] = 1);
    let rowIndices = getNodeOrderFromGraph(matrix);

    colConditions.forEach(([i, j]) => matrix[i-1][j-1] = 1);
    let colIndices = getNodeOrderFromGraph(matrix);
    
    if (!rowIndices || !colIndices) return [];

    for (let i of range(matrix.length)) {
        matrix[rowIndices[i]][colIndices[i]] = i + 1;
    }

    return matrix;
};

function getNodeOrderFromGraph(matrix) {
    let nodes = Array.from({length: matrix.length}, (_, i) => i);
    let nodeIndices = Array(matrix.length);

    for (let nodeIndex of range(matrix.length)) {
        if (!nodes.some((node, index) => {
            if (!matrix.every(row => row[node] === 0)) return false;
            nodeIndices[node] = nodeIndex;
            nodes.splice(index, 1);
            matrix[node] = matrix[node].map(_ => 0);
            return true;
        })) return;
    }

    return nodeIndices;
}

function* range(end) {
    for (let i = 0; i < end; i++) yield i;
}

function printM(matrix) {
    matrix.forEach(row => console.log(row));
    console.log("");
}

let k             = 3;
let rowConditions = [[1,2],[3,2]];
let colConditions = [[2,1],[3,2]];

let matrix = buildMatrix(k, rowConditions, colConditions);
matrix.forEach(row => console.log(row));
