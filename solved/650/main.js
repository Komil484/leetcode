/**
 * @param {number} n
 * @return {number}
 */


var minSteps = function(n) {
    let primeFactors = [];
    while (n % 2 === 0) { 
        primeFactors.push(2);
        n /= 2; 
    } 

    sqrt = Math.sqrt(n)
    for (let i = 3; i <= sqrt; i += 2) { 
        while (n % i === 0) { 
            primeFactors.push(i);
            n /= i;
        } 
    } 

    if (n > 1) {
        primeFactors.push(n);
    }

    return primeFactors.reduce((acc, cur) => acc + cur, 0);
};


let ns = [
    3,
    1,
];

ns.forEach(n => console.log(minSteps(n)));
