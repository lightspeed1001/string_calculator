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
    numbers.forEach(num => {
		sum += parseInt(num);
	});
    return sum;
}
module.exports = Add;
