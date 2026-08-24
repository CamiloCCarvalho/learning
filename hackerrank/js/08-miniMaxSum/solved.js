'use strict';

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
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

//Ignore the code above, It's used to run at site HackerRank


function miniMaxSum(arr) {
    
    let n1 = 0
    let n2 = 0
    arr.sort()
    for(let i=0; i < arr.length; i++){
        if(i < arr.length-1){
            n1 += arr[i]
        }
        if(i > 0){
            n2 += arr[i]
        }
    }
    console.log(n1 + ' ' + n2)

}

//Ignore the code below, It's used to run at site HackerRank
function main() {

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    miniMaxSum(arr);
}
