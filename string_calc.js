// string_calc.js
function Add(numbers) 
{
	if(!numbers) return 0;
	numbers = numbers.split(",");
	if(numbers.length == 1) return parseInt(numbers[0]);
	return parseInt(numbers[0]) + parseInt(numbers[1]);	
}
module.exports = Add;
