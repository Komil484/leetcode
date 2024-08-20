/**
 * @param {number[]} piles
 * @return {number}
 */

function max_stones(cumulative_sum, M, index, memo) {
    // if possible to take all remaining stones
    if (index + 2 * M >= cumulative_sum.length) {
        return cumulative_sum[index];
    }

    if (memo[index][M] > 0) {
        return memo[index][M];
    }

    let result = Infinity;

    for (let i = 1; i <= 2 * M; i++) {
        let temp = max_stones(cumulative_sum, Math.max(i, M), index + i, memo)
        if (temp < result) result = temp;
    }

    memo[index][M] = cumulative_sum[index] - result;
    return memo[index][M];
}

var stoneGameII = function(piles) {
    let memo = Array.from(piles, _ => Array.from(piles, _ => 0));

    let cumulative_sum = Array.from(piles);

    for (let i = cumulative_sum.length - 2; i >= 0; i--) {
        cumulative_sum[i] += cumulative_sum[i + 1];
    }

    let result = max_stones(cumulative_sum, 1, 0, memo);
    console.log(memo)
    return result;
};


let piless = [
    [2,7,9,4,4],
    [1,2,3,4,5,100],
];

piless.forEach(piles => console.log(stoneGameII(piles)));
