// function first
function one(a){
    return a+1;
}
console.log(one(5));

// another function
 const obj=function two(b){
    return b+2;
 }
 console.log(obj(3));
 

 // ++++++++++++++++++++++++++ calling object before +++++++++++++++++++++++


 // function first
 console.log(one(5));
function one(a){
    return a+1;
}


// another function
//  console.log(obj1(3));
 const obj1=function two(b){
    return b+2;
 }

  // conclusion is that simple function can be called first but object function can not be called first  