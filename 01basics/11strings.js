const name="harshit"
const age =19
// use backticks insted of + operator for strings
console.log(`Hello my name is ${name} and my age is ${age}`);
 

// another way to define string it provides length property and many more methods
const newstring= new String("harshit")
console.log(newstring);
console.log(newstring.__proto__);
console.log(newstring.length);
console.log(newstring.toUpperCase());
console.log(newstring.charAt(3));
console.log(newstring.indexOf("i"));

// read all the methods of string form the console 
// 1.in slice we can use negative indexing but in substring if we give negative value than it ignore and starts with zero.
// 2. trim()  ,input=    harshit   , output=harshit (remove extra spaces)
//replace(value,value to replace)
// splits() it splits the string value on the bases of somethings like spaces and comverted into array like in python it converts into list.
