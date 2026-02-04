// destructuring 
const course={
    coursename:"js in hindi",
    price:999,
    courseinstructor:"harshit"
}
// course.courseinstructor  another method of this
const {courseinstructor}=course
console.log(courseinstructor);

//in this we just give another name to courseinstructor as a
const {courseinstructor:a}=course
console.log(a);
