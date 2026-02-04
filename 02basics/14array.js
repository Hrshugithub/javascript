// we can store different types of values in [] it can be string number anything.....
// shallow copy means chnages will also reflected in the original ones also
// deep copy means chnages will not reflect in the originals ones

const myarr=[1,2,3,4,5,6,7]
// console.log(myarr[4]);
// myarr.push(100)
// myarr.push(100)
// console.log(myarr);
// myarr.pop()
// console.log(myarr);


// shift remove the element from the starting and unshift add the element in the starting
// myarr.shift()
// console.log(myarr);
// myarr.unshift(50)
// console.log(myarr);

// console.log(typeof myarr);


//slice and splice
// slice just normally slice the array upto the before index but splice trim the array and like cut the portion form it upto that index
console.log("A",myarr);
console.log(myarr.slice(1,3));
console.log("array after slicing",myarr);
console.log(myarr.splice(1,3));
console.log("array after splicing",myarr);




