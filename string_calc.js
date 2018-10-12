// string_calc.js
function Add(numbers) 
{
    //empty string returns 0
    if(!numbers) return 0;
    
    //replace all newline characters with a , and then split by ,
    numbers = numbers.replace(/\n/g, ",").split(",");
    //check if it's only one number
    if(numbers.length == 1) return parseInt(numbers[0]);
    //Add all of the numbers together
    sum = 0;
    //we'll only allow positive numbers
    is_valid = true;
    negatives = [];
    numbers.forEach(num => {
        if(num < 0)
        {
            //the number is negative. Function is now invalid
            is_valid = false;
            //keep track of invalid numbers
            negatives.push(num);
        }
        else
		    sum += parseInt(num);
    });

    if(!is_valid) //function is invalid; give user feedback
        throw ("Negatives not allowed: " + negatives.join(", "));
    return sum;
    
}
module.exports = Add;
