// string_calc.js
function Add(numbers) 
{
    //empty string returns 0
    if(!numbers) return 0;
    
    //check for custom deli
    if(numbers.startsWith("//"))
    {
        numbers = numbers.slice(2);                 //get rid of the //
        end_of_delim = numbers.indexOf("\n");       //grab the end of the delim
        delim = numbers.substr(0,end_of_delim);     //grab the delim
        numbers = numbers.slice(end_of_delim+  1);  //get rid of the delim and newline
        regex = RegExp(delim, "g");                 //regex to find all the delims
        numbers = numbers.replace(regex, ",");      //replace all of the new delims with an old one
    }

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
        if(num > 1000) return; //big numbers not allowed
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
