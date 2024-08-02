/**
 * @param {number} num
 * @return {string}
 */

var intToRoman = function(num) {
    const roman = new Map([
        [1, "I"],
        [5, "V"],
        [10, "X"],
        [50, "L"],
        [100, "C"],
        [500, "D"],
        [1000, "M"],
    ]);

    let digits = [];
    for (let place = 1; num > 0; place *= 10) {
        digits.push(div(num % 10, place));
        num = Math.floor(num / 10);
    }
    digits = digits.reverse().flat();

    return Array.from(digits, num => roman.get(num)).join("");
};

function div(digit, place) {
    if (digit % 5 === 4) return [place, place * (digit + 1)];

    let result = (digit >= 5) ? [5 * place] : [];
    for (let i = 0; i < digit % 5; i++) result.push(place)
    return result;
}


let nums = [
    3749,
    58,
    1994,
];

console.log(intToRoman(nums[0]));
//nums.forEach(num => console.log(intToRoman(num)));
