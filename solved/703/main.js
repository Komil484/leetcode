/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = nums.sort((a, b) => a - b);
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    let i = 0;
    let j = this.nums.length - 1;

    if (this.nums.length < 1 || val >= this.nums[j]) {
        this.nums.push(val);
        return this.nums[this.nums.length - this.k]
    }

    console.log(this.nums);
    while (i !== j) {
        let mid = Math.floor((i + j) / 2);
        console.log(i, mid, j, val);
        if (val > this.nums[mid]) i = mid+1;
        else j = mid;
    }
    console.log(i);
    this.nums.splice(i, 0, val);


    return this.nums[this.nums.length - this.k];
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */


let obj = new KthLargest(3, [4, 5, 8, 2]);
let vals = [
    3,
    5,
    10,
    9,
    4,
];

vals.forEach(val => console.log(obj.add(val)));
