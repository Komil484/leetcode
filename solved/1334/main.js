/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} distanceThreshold
 * @return {number}
 */

var findTheCity = function(n, edges, distanceThreshold) {
    let distances = Array.from({length: n}, _ => Array.from({length: n}, _ => Number.MAX_SAFE_INTEGER));

    for (let i = 0; i < distances.length; i++) {
        distances[i][i] = 0;
    }

    for (const [i, j, w] of edges) {
        distances[i][j] = w;
        distances[j][i] = w;
    }

    let nIter = Array.from({length: n}, (_, i) => i);

    for (const k of nIter)
        for (const i of nIter)
            for (const j of nIter)
                if (distances[i][j] > distances[i][k] + distances[k][j])
                    distances[i][j] = distances[i][k] + distances[k][j];

    let underThreshold = Array.from({length: n});

    for (const i of nIter) {
        let citiesUnderThreshold = 0;
        for (const j of nIter) {
            if (distances[i][j] <= distanceThreshold) {
                ++citiesUnderThreshold;
            }
        }
        underThreshold[i] = citiesUnderThreshold;
    }

    let min = underThreshold[0];
    let minCity = 0;
    for (const i of nIter) {
        if (underThreshold[i] <= min) {
            min = underThreshold[i];
            minCity = i;
        }
    }

    return minCity;
};



let n = 4;
let edges = [[0,1,3],[1,2,1],[1,3,4],[2,3,1]]
let distanceThreshold = 4

console.log(findTheCity(n, edges, distanceThreshold));
