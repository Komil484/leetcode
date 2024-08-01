/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let matching = new Map([[")", "("], ["]", "["], ["}", "{"]]);
    let isOpen = c => !matching.has(c);
    stack = [];
    for (const c of s) {
        if (isOpen(c)) stack.push(c);
        else if (stack.pop() !== matching.get(c)) return false;
    }
    return stack.length === 0;
};
