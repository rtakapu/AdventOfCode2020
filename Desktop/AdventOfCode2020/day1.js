
//This takes the input of the .txt file and breaks it down, trims off the end line of the file, and then converts it to an Int from a String
let fs = require('fs');
let nums = fs.readFileSync('input_day1.txt','utf-8');
nums = nums.trim();
let arrNum = nums.split('\n').map(Number);

total = 2020;//This is the sum they're looking for in the problem set @ https://adventofcode.com/2020/day/1

//Part 1: Sum of 2 integers within the list that total 2020; return product of the two integers
function calc2Ints(inputArr, inputTotal){
    for (let x = 0; x < arrNum.length ; x++){
        for (let y = arrNum.length; y >= 0 ; y--){
            if (arrNum[x]+arrNum[y] === 2020) {
                var product = arrNum[x]*arrNum[y];
                return product;
            }
        }
    }
}

//Part 2: Calc 3 integers within the list that total 2020; return product of t
function calc3Ints(inputArr, inputTotal){
    for (let x = 0; x < arrNum.length ; x++){
        for (let y = arrNum.length; y >= 0 ; y--){
            for (let z = 0; z < arrNum.length; z++){
                if (arrNum[x]+arrNum[y]+arrNum[z] === 2020) {
                    var product = arrNum[x]*arrNum[y]*arrNum[z];
                    return product;
                }
            }

        }
    }
}

console.log('The total for part 1 is: '+calc2Ints(arrNum,total));
console.log('The total for part 2 is: '+calc3Ints(arrNum,total));
