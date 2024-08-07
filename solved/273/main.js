/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function(num) {
    if (num === 0) return "Zero";

    const units = new Map([
        [1, "One"],
        [2, "Two"],
        [3, "Three"],
        [4, "Four"],
        [5, "Five"],
        [6, "Six"],
        [7, "Seven"],
        [8, "Eight"],
        [9, "Nine"],
    ]);

    const teens = new Map([
        [10, "Ten"],
        [11, "Eleven"],
        [12, "Twelve"],
        [13, "Thirteen"],
        [14, "Fourteen"],
        [15, "Fifteen"],
        [16, "Sixteen"],
        [17, "Seventeen"],
        [18, "Eighteen"],
        [19, "Nineteen"],
    ]);

    const tens = new Map([
        [20, "Twenty"],
        [30, "Thirty"],
        [40, "Forty"],
        [50, "Fifty"],
        [60, "Sixty"],
        [70, "Seventy"],
        [80, "Eighty"],
        [90, "Ninety"],
    ]);

    const triplesNames = ["", "Thousand", "Million", "Billion"];

    let parseHundreds = (num) => {
        let unitsPlace = num % 10;
        let tensPlace = Math.floor(num / 10) % 10;
        let hundredsPlace = Math.floor(num / 100);

        let result = "";

        // hundreds place
        if (hundredsPlace !== 0) {
            result += `${units.get(hundredsPlace)} Hundred `;
        }

        // tens place
        if (tensPlace === 1) {
            result += `${teens.get(tensPlace * 10 + unitsPlace)} `;
        } else if (tensPlace !== 0) {
            result += `${tens.get(tensPlace * 10)} `;
        }

        // units place
        if (tensPlace !== 1 && unitsPlace !== 0) {
            result += `${units.get(unitsPlace)} `;
        }

        return result.trim();
    };
    
    let triples = [
        num % 1000,
        Math.floor(num / 1000) % 1000,
        Math.floor(num / 1_000_000) % 1000,
        Math.floor(num / 1_000_000_000) % 1000,
    ];

    let result = "";
    for (let i = 3; i >= 0; i--) {
        if (triples[i] === 0) continue;

        result += `${parseHundreds(triples[i])} ${triplesNames[i]} `
    }

    return result.trim();
};


let nums = [
    123,
    153,
    17,
    390,
    12345,
    1234567,
];

nums.forEach(num => console.log(numberToWords(num)));
