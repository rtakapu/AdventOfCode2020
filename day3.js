function dissectMap(x, y){
    let xCount = 0;
    let yCount = 0;
    let treeCount = 0;
    while(yCount<=mapArray.length){
        yCount=yCount+y;
        xCount = (xCount+x)%mapArray[y].length;
        if (yCount===mapArray.length || yCount > mapArray.length){
            return treeCount;
        } else{
            if(mapArray[yCount].charAt(xCount)=='#'){
                treeCount++;
            }
        }
    }
}

const fs = require('fs');
const mapArray = fs.readFileSync('input_day3.txt', 'utf-8', 'r').split('\n').filter(x=>x);
//Part I
const totalTrees1 = dissectMap(3,1);
//Part II
const slopes = [[1,1],[3,1],[5,1],[7,1],[1,2]];
let productMultSlopes = 1;
for (const slope of slopes) {
    productMultSlopes *= dissectMap(...slope);
}
console.log('THE TOTAL AMOUNT OF TREES FOR PART I IS: ' + totalTrees1 + ' AND THE PRODUCT OF PART II IS: '+productMultSlopes);