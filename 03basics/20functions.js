// rest operator 
function calculatecartprice(val1,...num1){
    return num1
}
console.log(calculatecartprice(200,500,399));
// rest operator and spread operator both ae same depends on the usage of them 


// use object in functions
const user={
    username:"harshit",
    price:99
}
function handleobject(anyobject){
    console.log(`object name is ${anyobject.username} and the price is ${anyobject.price}`);

    
}
handleobject(user)// we can also use object directely here

// using array in objects
const mynewarray=[200,300,200,200]
function returnsecondvaluefromarray(getarray){
    return getarray[2]
}
console.log(returnsecondvaluefromarray(mynewarray));

