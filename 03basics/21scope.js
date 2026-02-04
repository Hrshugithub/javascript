// var can also be used outside the block 
// global scope and local scope
if(true){
    let a=90
    const b=50
    var c=30

}
// other two declaration method a,b can not be used outside the block but the var(c) can used outside the block here is the problem with using the var
// console.log(a);
// console.log(b);
// console.log(c); 

function one(){
    const username="harshit"
    function two(){
        const website="youtube"
    }
}

// function two can use function one variable but one cannot use two's variable
