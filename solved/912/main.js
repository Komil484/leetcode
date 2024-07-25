/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    numsCopy = Array.from(nums);
    mergeSort(numsCopy);
    return numsCopy;
};

function mergeSort(list) {
    if (list.length === 1) return list;

    let mid = Math.floor(list.length / 2);
    let list1 = mergeSort(list.slice(0, mid));
    let list2 = mergeSort(list.slice(mid));
    
    let i = 0;
    let j = 0;

    while (i < list1.length && j < list2.length) {
        if (list1[i] < list2[j]) {
            list[i+j] = list1[i++];
        } else {
            list[i+j] = list2[j++];
        }
    }

    while (i < list1.length) {
        list[i+j] = list1[i++];
    }

    while (j < list2.length) {
        list[i+j] = list2[j++];
    }

    return list;
}

nums = [3, 1, 2];
sorted = sortArray(nums);
console.log(nums);
console.log(sorted);
