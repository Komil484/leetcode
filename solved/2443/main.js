/**
 * @param {number} num
 * @return {boolean}
 */
var sumOfNumberAndReverse = function(num) {
    for (let i = 0; i < 100000; i++) {
        if (i + reverse(i) === num) return true;
    }
    return false;
};

function reverse(num) {
    let result = 0;
    while (num > 0) {
        result *= 10;
        result += num % 10;
        num = Math.floor(num / 10);
    }
    return result;
}

toReverse = [14, 65, 23, 15, 70, 2, 160, 8];
toReverse.forEach(num => console.log(num, reverse(num)));

