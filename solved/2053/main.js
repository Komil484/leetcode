/**
 * @param {string[]} arr
 * @param {number} k
 * @return {string}
 */
var kthDistinct = function(arr, k) {
    let map = new Map();
    for (const elem of arr) {
        if (map.has(elem)) {
            map.set(elem, map.get(elem) + 1);
        } else {
            map.set(elem, 1);
        }
    }

    let n = 0;
    for (const [elem, value] of map.entries()) {
        if (value === 1) {
            n++;
            if (n === k) return elem;
        }
    }
    return "";
};
