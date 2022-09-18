/*https://leetcode.com/problems/add-digits/*/

const addDigits = function (num) {
    let sum = num.toString().split('').map(el => Number(el)).reduce((acc, el) => (acc + el), 0)
    while (sum >= 10) {
        sum = sum.toString().split('').map(el => Number(el)).reduce((acc, el) => (acc + el), 0)
    }
    return sum;
};
addDigits(38)