/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
    let fives = 0;
    let tens = 0;

    for (const bill of bills) {
        if (bill === 20) {
            if (tens > 0 && fives > 0) {
                fives--;
                tens--;
            } else if (fives >= 3) fives -= 3;
            else return false;
        } else if (bill === 10) {
            tens++;
            if (fives > 0) fives--;
            else return false;
        } else {
            fives++;
        }
    }

    return true;
};

let billss = [
    [5,5,5,10,20],
    [5,5,10,10,20],
    [5,5,5,10,5,5,10,20,20,20],
];

billss.forEach(bills => console.log(lemonadeChange(bills)));
