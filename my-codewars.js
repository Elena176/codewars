//1. Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
function capitals(word) {
    let arr = [];
    word = word.split('');
    for(let i = 0; i < word.length; i++){
        if(word[i] === word[i].toUpperCase()){
            arr.push(i)
        }
    }
    return arr;
}

class Samurai {
    constructor(name) {
        this.name = name
    }
    hello() {
        alert(this.name)
    }
}

let shogun = new Samurai('Elena')
console.log(shogun.__proto__)
console.log(shogun.__proto__.constructor.__proto__)
