/**
 * @param {string} word
 * @return {number}
 */
var minimumPushes = function(word) {
    const NUMPAD_KEYS = 8;
    const charToInt = c => c.charCodeAt(0) - "a".charCodeAt(0);
    const letterFreq = Array.from({length: 26}, _ => 0);

    for (const letter of word) {
        letterFreq[charToInt(letter)]++;
    }

    letterFreq.sort((a, b) => b - a);

    console.log(letterFreq);

    let total = 0;
    let modCount = 0;
    let n = 1;
    for (let i = 0; i < letterFreq.length; i++) {
        if (modCount === NUMPAD_KEYS) {
            modCount = 0;
            n++;
        }
        modCount++;
        total += letterFreq[i] * n;
    }
    return total;
};


let words = [
    "abcde",
    "xyzxyzxyzxyz",
    "aabbccddeeffgghhiiiiii",
];

words.forEach(word => console.log(minimumPushes(word)));
