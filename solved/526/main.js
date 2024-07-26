/**
 * @param {number} n
 * @return {number}
 */
var countArrangement = function(n) {
    let nIter = Array.from({length: n}, (_, i) => i);
    let total = 0;
    for (let i = 0; i < n; i++) {
        let nums = [i];
        total += isBeautifulArray(nums, nIter);
    }
    return total;
};

function isBeautifulArray(nums, nIter) {
    if (!isBeautiful(nums[nums.length - 1] + 1, nums.length)) return 0;
    if (nums.length === nIter.length) return 1;
    let total = 0;
    for (const n of nIter.filter(x => !nums.includes(x))) {
        nums.push(n);
        total += isBeautifulArray(nums, nIter);
        nums.pop();
    }
    return total;
}

function isBeautiful(a, b) {
    return (a % b === 0) || (b % a === 0);
}



array = Array.from({length: 15}, (_, i) => countArrangement(i + 1));
console.log(array);

