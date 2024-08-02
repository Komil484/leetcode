/**
 * @param {number[]} nums
 * @return {number}
 */
var minSwaps = function(nums) {
    let oneCount = nums.reduce((acc, cur) => acc + cur, 0);
    let min = oneCount;
    let currentOnes = 0;
    for (let i = 0; i < oneCount; i++) {
        currentOnes += nums[i];
    }
    for (let i = 0; i < nums.length; i++) {
        currentOnes -= nums[i];
        currentOnes += nums[(i + oneCount) % nums.length]
        min = (oneCount - currentOnes < min) ? oneCount - currentOnes : min;
    }
    return min;
};


let numss = [
    [0,1,0,1,1,0,0], // 3
    [0,1,1,1,0,0,1,1,0], // 5
    [1,1,0,0,1], // 3
];

numss.forEach(nums => console.log(minSwaps(nums)));
