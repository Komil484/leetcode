/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    strs.sort();
    let first = strs[0];
    let last = strs.at(-1);
    let len = Math.min(first.length, last.length);

    let i = 0;
    while (i < len && first[i] === last[i]) i++;

    return first.slice(0, i);
};

let strss = [
    ["flower","flow","flight"],
    ["dog","racecar","car"],
];

strss.forEach(strs => console.log(longestCommonPrefix(strs)));
