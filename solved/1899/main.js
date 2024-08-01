/**
 * @param {number[][]} triplets
 * @param {number[]} target
 * @return {boolean}
 */
var mergeTriplets = function(triplets, target) {
    return triplets
        .filter(triplet => triplet.every((n, i) => n <= target[i]))
        .reduce((acc, cur) => acc.map((n, i) => Math.max(n, cur[i])), [0, 0, 0])
        .every((n, i) => n === target[i]);
};


let tripletss = [
    [[2,5,3],[1,8,4],[1,7,5]],
    [[3,4,5],[4,5,6]],
    [[2,5,3],[2,3,4],[1,2,5],[5,2,3]],
];

let targets = [
    [2,7,5],
    [3,2,5],
    [5,5,5],
];

tripletss.forEach((triplets, i) => console.log(mergeTriplets(triplets, targets[i])));
