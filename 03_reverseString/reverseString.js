const reverseString = function(textToReverse) {
    reversedArray = [];
    for (i = textToReverse.length; i > 0; i--){
        reversedArray.push(textToReverse[i-1]);
    }
    result = reversedArray.join("");
    return result;
};

// Do not edit below this line
module.exports = reverseString;
