// string_calc.js
function Add(numbers) 
{
    //empty string returns 0
    if(!numbers) return 0;
    
    //convert the string into an array of numbers, split by ,
    numbers = numbers.split(",");
    //check if it's only one number
    if(numbers.length == 1) return parseInt(numbers[0]);
    //else add the two numbers together
    return parseInt(numbers[0]) + parseInt(numbers[1]);
}
module.exports = Add;
