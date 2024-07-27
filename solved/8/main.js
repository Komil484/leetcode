/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function(s) {
    let i = 0;
    
    const isSpace = (ch) => " \n\t\v\f\r".includes(ch);
    while (i < s.length && isSpace(s[i])) {i++;}

    let sign = 1;
    if (s[i] === "+" || s[i] === "-") {
        if (s[i] === "-") sign = -1;
        i++;
    }

    while (i < s.length && s[i] === "0") {i++;}

    const digitToInt = (ch) => ch.charCodeAt(0) - "0".charCodeAt(0);
    const isDigit = (ch) => 0 <= digitToInt(ch) && digitToInt(ch) <= 9;

    let num = 0;
    while (i < s.length && isDigit(s[i])) {
        num *= 10;
        num += digitToInt(s[i]);
        i++;
    }

    result = num * sign;
    const SMALLEST_I32 = -Math.pow(2, 31);
    const GREATEST_I32 = Math.pow(2, 31) - 1;
    if (result <= SMALLEST_I32) return SMALLEST_I32;
    if (result >= GREATEST_I32) return GREATEST_I32;
    return result;
};


let s = "   -042";
console.log(myAtoi(s));
