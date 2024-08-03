/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    if (target.length !== arr.length) return false;

    let l1 = target.toSorted((a, b) => a - b);
    let l2 = arr.toSorted((a, b) => a - b);

    for (let i = 0; i < l1.length; i++) {
        if (l1[i] !== l2[i]) return false
    }
    return true
};
