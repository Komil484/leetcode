/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let min = arrays[0][0];
    let max = arrays[0].at(-1);

    let maxDiff = Math.abs(arrays[0][0] - arrays[1].at(-1));
    for (let i = 1; i < arrays.length; i++) {
        maxDiff = Math.max(maxDiff, Math.abs(arrays[i][0] - max), Math.abs(arrays[i].at(-1) - min));
        min = Math.min(min, arrays[i][0]);
        max = Math.max(max, arrays[i].at(-1));
    }

    return maxDiff;
};

let arrayss = [
    [[1,2,3],[4,5],[1,2,3]],
    [[1],[1]],
];

arrayss.forEach(arrays => console.log(maxDistance(arrays)));
