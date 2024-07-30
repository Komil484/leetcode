/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let map = {};

    nums.forEach(num => {
        if (map.hasOwnProperty(num)) map[num] += 1;
        else map[num] = 1;
    });

    let keys = Object.keys(map);
    let arr = Array.from(keys, key => [key, map[key]])

    arr = arr.sort((a, b) => a[1] !== b[1] ? a[1] - b[1] : b[0] - a[0]);

    let result = [];
    for (const [key, count] of arr)
        for (let i = 0; i < count; i++)
            result.push(parseInt(key));

    return result;
};


let numss = [
    [1,1,2,2,2,3],
    [2,3,1,3,2],
    [-1,1,-6,4,5,-6,1,4,1],
];

numss.forEach(nums => console.log(frequencySort(nums)));
