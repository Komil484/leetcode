/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

const backtrack = (candidates, target, indices, current, result) => {
    if (target < 0) return;
    if (target === 0) {
        result.push(current.slice());
        return;
    }

    for (let i = indices; i < candidates.length; i++) {
        if (i > indices && candidates[i] === candidates[i-1]) continue;
        current.push(candidates[i]);
        backtrack(candidates, target - candidates[i], i+1, current, result);
        current.pop();
    }
};

var combinationSum2 = function(candidates, target) {
    result = [];
    candidates.sort();
    backtrack(candidates, target, 0, [], result);
    return result;
};


let inputs = [
    [
        [10,1,2,7,6,1,5],
        8,
    ],
    [
        [2,5,2,1,2],
        5,
    ],
];

inputs.forEach(input => console.log(combinationSum2(...input)));
