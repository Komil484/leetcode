/**
 * @param {number[]} arr
 * @param {number} target
 * @return {number}
 */

// 
// approach:
// 1st iteration:
// get a hashmap of sums from the left (key: sum(arr[0:i]), value: i)
// 
// 2nd iteration:
// move through the array with sum,
// find target subarray on the left by searching for (sum - target)
// and target subarray on the right by searching for (sum + target)
// if found on left save it as min left (lsize),
// if found on right save it as result,
// if and only if rsize + lsize is less than prev result
//
// this only works in the case that ALL number in array are POSITIVE
// if there is a 0 or negative number, there is no guarantee that sum will be unique for a give i
// and so, there will be collisions in the hashmap
//
var minSumOfLengths = function(arr, target) {
    let hmap = new Map();
    let sum = 0;
    let lsize = Number.MAX_SAFE_INTEGER;
    let result = Number.MAX_SAFE_INTEGER;

    hmap.set(0, -1);

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        hmap.set(sum, i);
    }

    let hmap_get = undefined;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];

        hmap_get = hmap.get(sum - target);
        if (hmap_get !== undefined) {
            lsize = Math.min(lsize, i - hmap_get);
        }

        hmap_get = hmap.get(sum + target);
        if (hmap_get !== undefined && lsize < Number.MAX_SAFE_INTEGER) {
            result = Math.min(result, hmap_get - i + lsize);
        }
    }
    if (result === Number.MAX_SAFE_INTEGER) return -1;
    return result;
};


let big_arr = Array.from({length: 100000}, _ => 1000);
let big_target = 50000000;

let arr = [7,3,4,7];
let target = 7;
console.log(minSumOfLengths(big_arr, big_target));
