/**
 * @param {number[]} nums
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeSum = function(nums, n, left, right) {
    let mod = 1000000007;
    let subsums = [];

    let total = nums.reduce((acc, cur) => acc + cur, 0);
    for (let i = 0; i < nums.length; i++) {
        let sum = 0;
        for (let j = i; j < nums.length; j++) {
            sum += nums[j];
            subsums.push(sum);
        }
    }
    return subsums
        .sort((a, b) => a - b)
        .slice(left-1, right)
        .reduce((acc, cur) => acc + cur, 0)
        % mod;
};


let numss = [
    [1,2,3,4],
    [1,2,3,4],
    [1,2,3,4],
];

let ns = [
    4,
    4,
    4,
];

let lefts = [
    1,
    3,
    1,
];

let rights = [
    5,
    4,
    10,
];

numss.forEach((nums, i) => console.log(rangeSum(nums, ns[i], lefts[i], rights[i])));
