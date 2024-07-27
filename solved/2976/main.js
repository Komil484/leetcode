/**
 * @param {string} source
 * @param {string} target
 * @param {character[]} original
 * @param {character[]} changed
 * @param {number[]} cost
 * @return {number}
 */
var minimumCost = function(source, target, original, changed, cost) {
    let costMatrix = Array.from({length: 26}, _ => Array.from({length: 26}, _ => Infinity));
    
    for (let i = 0; i < cost.length; i++) {
        if (cost[i] < costMatrix[ord(original[i])][ord(changed[i])]) {
            costMatrix[ord(original[i])][ord(changed[i])] = cost[i];
        }
    }

    for (let i = 0; i < costMatrix.length; i++) {
        costMatrix[i][i] = 0;
    }

    for (let k = 0; k < costMatrix.length; k++)
        for (let i = 0; i < costMatrix.length; i++)
            for (let j = 0; j < costMatrix.length; j++)
                if (costMatrix[i][j] > costMatrix[i][k] + costMatrix[k][j])
                    costMatrix[i][j] = costMatrix[i][k] + costMatrix[k][j];

    let totalCost = 0;
    for (let i = 0; i < source.length; i++) {
        totalCost += costMatrix[ord(source[i])][ord(target[i])];
        if (totalCost === Infinity) return -1;
    }

    return totalCost;
};

function ord(ch) {
    return ch.charCodeAt(0) - "a".charCodeAt(0);
}



let inputs = [
    [
        "abcd",
        "acbe",
        ["a","b","c","c","e","d"],
        ["b","c","b","e","b","e"],
        [2,5,5,1,2,20],
    ],
    [
        "aaaa",
        "bbbb",
        ["a","c"],
        ["c","b"],
        [1,2],
    ],
    [
        "abcd",
        "abce",
        ["a"],
        ["e"],
        [10000],
    ],
]

for (const input of inputs) {
    console.log(minimumCost(input[0], input[1], input[2], input[3], input[4]));
}
