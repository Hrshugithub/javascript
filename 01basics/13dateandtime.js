 const mydate=new Date()
 console.log(mydate);
 console.log(mydate.toDateString());
 console.log(mydate.toString());
 console.log(mydate.toLocaleString());

  console.log(mydate.toISOString());
  console.log(mydate.toLocaleDateString());

 // date data type is an object
 console.log(typeof mydate);

 const mycreateddate=new Date(2026,1,3)
 console.log(mycreateddate.toDateString());

 // we use mm dd yy methods for date 
 // we can also use differents methods like const date=new Date(2026,0,3,5,6) where 2026 is year, 0 is month, 3 is date , 5 is hours and 6 is the minute
 const mmddyy=new Date("01-13-2026")
console.log(mmddyy.toLocaleString());


// we can also use get methods in these date for months date time etc. and return zero if not present



 