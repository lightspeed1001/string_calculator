const calculator = require("./string_calc");

console.log('tutturuu');
console.log(calculator(""));
console.log(calculator("1"));
console.log(calculator("1,2"));
console.log(calculator("1,2,3,4,5,6,7"));
console.log(calculator("1\n2,3,4,5\n6,7"));
try 
{
    console.log(calculator("1,2,3,-4,5,-6,7"));    
} 
catch (e) 
{
    console.log(e);
}

try 
{
    console.log(calculator("1,2,3,4,5,6,7"));  
} 
catch (e) 
{
    console.log(e);
}

try 
{
    console.log(calculator("1,-2,3\n4,5,6,7"));
} 
catch (e) 
{
    console.log(e);
}

try 
{
    console.log(calculator("1,2,3\n-4,5,6,7"));
} 
catch (e) 
{
    console.log(e);
}