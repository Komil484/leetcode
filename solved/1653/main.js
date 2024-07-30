/**
 * @param {string} s
 * @return {number}
 */
var minimumDeletions = function(s) {
    let a = 0;
    let b = 0;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "a") a++;
    }

    let min = a;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "b") b++;
        else a--;
        min = Math.min(min, a + b);
    }

    return min;
};


let ss = [
"aababbab",
"bbaaaaabb",
];

ss.forEach(s => console.log(minimumDeletions(s)));
