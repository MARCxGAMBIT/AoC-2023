const fs = require('fs');
let input = fs.readFileSync('./day1_input.txt', 'utf-8').split('\n');

const regexBegin = /.*?(\d|one|two|three|four|five|six|seven|eight|nine|zero)/;
const regexEnd = /.*(\d|one|two|three|four|five|six|seven|eight|nine|zero).*/;

const numMap = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "zero": 0
}

console.time('day1');

// const firstDigit = input
//     .map((line) => line.match(regexBegin))
//     .map(([, a]) => numMap[a] ?? +a);

// const lastDigit = input
//     .map((line) => line.match(regexEnd))
//     .map(([, a]) => numMap[a] ?? +a);

// const sum = firstDigit
//     .map((a, i) => a * 10 + lastDigit[i])
//     .reduce((acc, cur) => acc + cur, 0);

let sum = 0;

for (let line of input) {
    let first = line.match(regexBegin);
    let last = line.match(regexEnd);
    let firstDigit = numMap[first[1]] ?? +first[1];
    let lastDigit = numMap[last[1]] ?? +last[1];
    sum += firstDigit * 10 + lastDigit;
}

console.timeEnd('day1');

console.log(`day1: ${sum}`);

