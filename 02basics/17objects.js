const tinderuser=new Object()// singleton object or constructor object

const tinderuser1={} //non singleton object
tinderuser1.name="harshit"
tinderuser1.id=12506066
tinderuser1.isloggedin=true
// console.log(tinderuser1);

const regularuser={
    email:"harshitrajput@gmail.com",
    fullname:{userfullname:"harshit rajput",halfname:"harshit"}
}
// console.log(regularuser);
// console.log(regularuser.fullname.halfname);

const obj1={1:"a",2:"b"}
const obj2={3:"c"}
const obj3=Object.assign({},obj1,obj2)// {} is the target and other object are the source
// console.log(obj3);

const obj4={...obj1,...obj2}// spread method very usefull syntax
// console.log(obj4);
console.log(Object.keys(tinderuser1));// data type is array can we use for multi purpose

// console.log();

console.log(tinderuser1.hasOwnProperty('name'));




