// string_calc.js
function Add(numbers) 
{
	if(!numbers) return 0;
	if(numbers.includes("//"))
	{
		custom_delim = numbers[2];
		indexof = numbers.indexOf("\n");
		numbers = numbers.slice(indexof+1);
		regexp = new RegExp(custom_delim, "g");
		numbers = numbers.replace(regexp, ",");
	}

	numbers = numbers.replace(/\n/g, ",").split(",");
	
	if(numbers.length == 1) return parseInt(numbers[0]);
	sum = 0;
	invalid = false;
	invalid_numbers = [];
	numbers.forEach(num => {
		if(num < 0)
		{
			invalid = true;
			invalid_numbers.push(num);
		}
		else if(num <= 1000)
			sum += parseInt(num);
	});

	if(invalid)
	{
		throw "Negatives not allowed: " + invalid_numbers.join(", ");
	}
	else
	{
		return sum;		
	}
}
module.exports = Add;
