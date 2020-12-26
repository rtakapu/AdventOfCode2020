//Part1

function stringSplitter(arrDocLine){
    let policyRules = arrDocLine.split(':')
    let reNum = /[+]?[0-9]*\.?[0-9]+/g
    let reAlp = /[a-z]/g
    let localPolicyNums = policyRules[0].match(reNum)
    let policyAlp = policyRules[0].match(reAlp)
    let localCheck = policyAlp[0]
    let localPwd = policyRules[1]
    localPolicyNums = localPolicyNums.map(i=>Number(i))
    return {localCheck, localPwd, localPolicyNums};
}
function letterIterator(check, pwd, policyNums) {
    var counter = 0;
    for (let x=0; x< pwd.length;x++){
        if (check === pwd[x]){
            counter += 1
        }
    }
    
    if (counter >= policyNums[0] && counter <= policyNums[1]){
        return true
    }
}
//Part 2 of the Advent
function positionChecker(letter, pwd, positionNums){
    if((letter === pwd[positionNums[0]] && !(letter === pwd[positionNums[1]])) || (!(letter === pwd[positionNums[0]]) && letter === pwd[positionNums[1]]))
    {
        return true
    }
}

let totalCount = 0;

const { clear } = require('console');
const fs = require('fs')
let docTxt = fs.readFileSync('day2.txt','utf-8','r');
docTxt = docTxt.trim();
let arrDoc = docTxt.split('\n');

for(let x=0; x < arrDoc.length; x++){
    //Can use this as intake for both 
    let checkPwdPolicyNums = stringSplitter(arrDoc[x])    

    //Part 1 function
    if(letterIterator(checkPwdPolicyNums['localCheck'], checkPwdPolicyNums['localPwd'], checkPwdPolicyNums['localPolicyNums'])===true){
        totalCount +=1;
    }

    //Part 2; comment this out if you want to do part 1
    if(positionChecker(checkPwdPolicyNums['localCheck'], checkPwdPolicyNums['localPwd'], checkPwdPolicyNums['localPolicyNums'])===true){
    totalCount +=1;
    }
    
}

console.log('the total count is: '+totalCount);