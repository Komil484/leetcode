/**
 * @param {number[]} rating
 * @return {number}
 */

// method:
// iterate through array with only the mid point (1 -> rating.length - 1)
// find how many are less than the iterated
// and how many are more than the iterated
// multiply those two to find the amount of combinations
// add to total (starts with 0)
var numTeams = function(rating) {
    let total = 0;
    for (let j = 1; j < rating.length - 1; j++) {
        let leftLess = 0;
        let leftMore = 0;
        for (let i = 0; i < j; i++) {
            if (rating[i] < rating[j]) leftLess++;
            else leftMore++;
        }
        let rightMore = 0;
        let rightLess = 0;
        for (let k = j + 1; k < rating.length; k++) {
            if (rating[j] < rating[k]) rightMore++;
            else rightLess++;
        }
        total += (leftLess * rightMore) + (leftMore * rightLess);
    }
    return total;
};


let ratings = [
    [2,5,3,4,1],
    [2,1,3],
    [1,2,3,4],
];

console.log(ratings.map(rating => numTeams(rating)));
