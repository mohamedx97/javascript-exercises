const removeFromArray = function (arrayToRemoveFrom, ...args) {
  for (argument of args) {
    while (arrayToRemoveFrom.includes(argument)){
        for (arg of arrayToRemoveFrom){
            if (arg === argument){
                arrayToRemoveFrom.splice(arrayToRemoveFrom.indexOf(arg), 1);
            }
        }
    }
  }
  return arrayToRemoveFrom;
};

// Do not edit below this line
module.exports = removeFromArray;