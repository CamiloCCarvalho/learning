'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

//Ignore the code above, It's used to run at site HackerRank

function birthdayCakeCandles(candles) {
    candles.sort(function(a,b){
        if(a > b){
            return 1
        }
        if(a < b){
            return -1
        }
        return 0
    })
    var num = 1
    var tall = candles[candles.length-1]
    for(let i=candles.length-2; i >=0;  i--){
        if(candles[i] == tall){
            num++
        }
    }
    return num
}

//Ignore the code below, It's used to run at site HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const candlesCount = parseInt(readLine().trim(), 10);

    const candles = readLine().replace(/\s+$/g, '').split(' ').map(candlesTemp => parseInt(candlesTemp, 10));

    const result = birthdayCakeCandles(candles);

    ws.write(result + '\n');

    ws.end();
}
