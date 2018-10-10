// string_calc.js
function Add(numbers) 
{
	if(!numbers) return 0;
	numbers = numbers.replace(/\n/g, ",").split(",");
	if(numbers.length == 1) return parseInt(numbers[0]);
	sum = 0;
	numbers.forEach(num => {
		sum += parseInt(num);
	});

	return sum;	
}
module.exports = Add;
