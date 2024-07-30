/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return heights.map((e, i) => [e, names[i]]).sort((a, b) => b[0] - a[0]).map(e => e[1]);
};
