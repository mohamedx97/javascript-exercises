const repeatString = function(word,countOfrepeateing) {
    repeatedText = ""
    if (countOfrepeateing < 0)
    {
        return "ERROR";
    }
    else
    {
        for (i = countOfrepeateing;i > 0;i--)
        {
            repeatedText = repeatedText + word
        }
        return repeatedText
    }
}
// Do not edit below this line
module.exports = repeatString;
