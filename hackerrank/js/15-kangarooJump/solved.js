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
 * Complete the 'kangaroo' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER x1
 *  2. INTEGER v1
 *  3. INTEGER x2
 *  4. INTEGER v2
 */

// Igonre the code above, it's used to run at site hackerrank
function kangaroo(x1, v1, x2, v2) {
    
    let pk1 = x1 + v1
    let pk2 = x2 + v2
    let firstGap = null;
    let secondGap = null;
    if(pk1 > pk2){
        firstGap = pk1 + pk2
        secondGap = (pk1 += v1) - (pk2 += v2)
    }else{
        firstGap = pk2 - pk1
        secondGap = (pk2 += v2) - (pk1 += v1)
    }
    if(secondGap >= firstGap){
        return "NO"
    }else{
        let t = secondGap - firstGap
        if(secondGap%t == 0){
            return "YES"
        }else{
            return "NO"
        }
    }
}
// Igonre the code below, it's used to run at site hackerrank
function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const firstMultipleInput = readLine().replace(/\s+$/g, '').split(' ');

    const x1 = parseInt(firstMultipleInput[0], 10);

    const v1 = parseInt(firstMultipleInput[1], 10);

    const x2 = parseInt(firstMultipleInput[2], 10);

    const v2 = parseInt(firstMultipleInput[3], 10);

    const result = kangaroo(x1, v1, x2, v2);

    ws.write(result + '\n');

    ws.end();
}