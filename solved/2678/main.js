/**
 * @param {string[]} details
 * @return {number}
 */
var countSeniors = function(details) {
    return details
        .map(detail => parseInt(detail.slice(11, 13)))
        .filter(age => age > 60)
        .length;
};
