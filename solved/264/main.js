/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function(n) {
    let uglyNumbers = Array.from({length: n});
    uglyNumbers[0] = 1;
    let index2 = 0;
    let index3 = 0;
    let index5 = 0;
    for (let i = 1; i < n; i++) {
        let mul2 = uglyNumbers[index2] * 2;
        let mul3 = uglyNumbers[index3] * 3;
        let mul5 = uglyNumbers[index5] * 5;

        let minMul = Math.min(mul2, mul3, mul5);

        if (minMul === mul2) index2++;
        if (minMul === mul3) index3++;
        if (minMul === mul5) index5++;

        uglyNumbers[i] = minMul;
    }
    
    return uglyNumbers[n-1];
};


let ns = [
    10,
    1,
];

ns.forEach(n => console.log(nthUglyNumber(n)));
