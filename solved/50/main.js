/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function(x, n) {
    let isEdgeCase = n === 1 << 31;

    if (n < 0) {
        x = 1 / x;
        n = -n;
    }

    total = 1;
    for (let i = 0; i < 31; i++) {
        let bitMask = (1 << i);
        if (n & bitMask) total *= x;
        x *= x;
    }

    if (isEdgeCase) return x;
    return total;
};

let x = -2;
let n = 10;
console.log(myPow(x, n));
