const sumAll = function(num1, num2) {
    if (num1 < 0 || num2 < 0){
        return "ERROR";
    }else if (!Number.isInteger(num1) || !Number.isInteger(num2)){
        return "ERROR";
    }
    
    let theBigNum = 0;
    let theSmallNum = 0;
    let seriesLen = 0;
   
    if (num1 > num2){
        theBigNum = num1;
        theSmallNum = num2;
        seriesLen = theBigNum - theSmallNum + 1;
        return (((theBigNum + theSmallNum))*seriesLen) / 2;
    }
    else if(num2 > num1){
        theBigNum = num2;
        theSmallNum = num1;
        seriesLen = theBigNum - theSmallNum + 1;
        return (((theBigNum + theSmallNum))*seriesLen) / 2;
    }
    else{
        return 0;
    }
}

// Do not edit below this line
module.exports = sumAll;
