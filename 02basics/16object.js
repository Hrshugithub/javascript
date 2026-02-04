// singalton = by constructor method
 
//important = symbol use in obj by square brackets
const mysum=Symbol("harshit")
// object method 
const obj={
    name :"harshit",
    roll:16,
    location:"uttarpradesh",
    [mysum]:"harshitt",
    gmail:"harshitrajput.hk@gmail.com"
}
// console.log(obj[mysum]);

// console.log(obj.location);
// console.log(obj["location"]);

obj.name="harshu"
// Object.freeze(obj)// now no change can happen
// in square bracket method we have to input as string and in other it automaticly input as string
obj.greeting=function(){
    console.log("Hello js user ");
    
    
}
obj.greeting2=function(){
    console.log(`Hello ${this.gmail}js user `);
    }
console.log(obj.greeting());
console.log(obj.greeting2());
obj.greeting()