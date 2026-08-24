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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

// Ignore the code above, it's used to run at site HackerRank

function breakingRecords(scores) {
    
    let min
    let max
    let ar = [0, 0]
    for(let i =0; i < scores.length; i++){
        if(i == 0){
            min = scores[i]
            max = scores[i]
        }
        if(i > 0){
            if(scores[i] < min){
                min = scores[i]
                ar[1]++
            }else if(scores[i] > max){
                max = scores[i]
                ar[0]++
            }
        }
    }
    return ar
}

// Ignore the code below, it's used to run at site HackerRank

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}
