/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

const countPairs = (nums, maxDistance) => {
    count = 0;
    left = 0;
    for (let right = 0; right < nums.length; right++) {
        while (nums[right] - nums[left] > maxDistance) left++;
        count += right - left;
    }
    return count;
};

var smallestDistancePair = function(nums, k) {
    nums.sort((a, b) => a - b);
    let left = 0;
    let right = nums.at(-1) - nums[0];

    while (left < right) {
        let mid = Math.floor((right + left) / 2);
        let count = countPairs(nums, mid);

        if (count < k) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};


inputs = [
    [
        [1,3,1],
        1,
    ],
    [
        [1,1,1],
        2,
    ],
    [
        [1,6,1],
        3,
    ],
    [
        [62,100,4],
        2,
    ],
];

inputs.forEach(input => console.log(smallestDistancePair(...input)));
