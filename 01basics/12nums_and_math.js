 //+++++++++++++++++++++++numbers+++++++++++++++++++++++++++++++++++++
 const num=100

 const num1= new Number(400)
 console.log(num);
 console.log(num1);
 
 console.log(num1.toString().length);
 console.log(num1.toFixed(3));
 
 const othernum=39486.942309864
 console.log(othernum.toFixed(2));
 // we can also use toprecision() but carefully ( need to learn it )

 //toprecision zero is not counted and it means round off and count the numbers from left to right
 // the main difference between tofixed and toprecision is that to fixed only counts decimal after value but to presicion count both value after decimal and before decimal

 //++++++++++++++++++++++++++++++++++maths++++++++++++++++++++++++
 console.log(Math.abs(-5));
 console.log(Math.sqrt(25));
// math.random() always gives value between or equal to 0 and 1
