/**
 * @param {number[]} mapping
 * @param {number[]} nums
 * @return {number[]}
 */

var sortJumbled = function(mapping, nums) {
    return Array.from(nums).sort(
        (a, b) => mappedInt(a, mapping) - mappedInt(b, mapping)
    );
};

function mappedInt(num, mapping) {
    num = num.toString();
    let result = 0;
    for (const ch of num) {
        result *= 10;
        result += mapping[charToInt(ch)];
    }
    return result;
}

function charToInt(ch) {
    return ch.charCodeAt(0) - '0'.charCodeAt(0);
}




mapping = [
    [8,9,4,0,2,1,3,5,7,6],
    [0,1,2,3,4,5,6,7,8,9]
];
nums = [
    [991,338,38],
    [789,456,123]
];
expected = [
    [338,38,991],
    [123,456,789]
];

for (let i = 0; i < mapping.length; i++) {
    console.log("TEST", i + 1);
    let result = sortJumbled(mapping[i], nums[i]);
    console.log("expect:", expected[i]);
    console.log("result:", result);

    console.log("");
}
